"use client";

import { getFeedPhotos } from "@/actions/feed";
import { useEffect, useState } from "react";
import FeedPhotos from "./photos";
import { FeedPhoto } from "@/types/feed";
import Loading from "../loading";

type FeedProps = {
    photos: FeedPhoto[];
};

const VIEWPORT_HEIGHT_PERCENTAGE = 0.75;

const Feed = ({ photos: photosProps = [] }: FeedProps) => {
    const [infinite, setInfinite] = useState(true);
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState<FeedPhoto[]>(photosProps);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleGetFeedPhotos = async () => {
            try {
                if (page === 1) return;

                setIsLoading(true);
                const { data } = await getFeedPhotos({ page, total: 6 });

                setPhotos((prevPhotos) => [...prevPhotos, ...(data || [])]);

                if ((data || []).length < 6) {
                    setInfinite(false);
                }
            } catch (error) {
                console.log("error", error);
            } finally {
                setIsLoading(false);
            }
        };

        handleGetFeedPhotos();
    }, [page]);

    useEffect(() => {
        let shouldWait = false;
        const infinitePage = () => {
            if (infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;

                const canScroll = scroll > height * VIEWPORT_HEIGHT_PERCENTAGE && !shouldWait;

                if (canScroll) {
                    shouldWait = true;
                    setTimeout(() => {
                        shouldWait = false;
                    }, 1500);

                    setPage((page) => page + 1);
                }
            }
        };

        window.addEventListener("wheel", infinitePage);
        window.addEventListener("scroll", infinitePage);

        return () => {
            window.removeEventListener("wheel", infinitePage);
            window.removeEventListener("scroll", infinitePage);
        };
    }, [infinite, setPage]);

    return (
        <section className="container mainContainer">
            {!!photosProps.length && <FeedPhotos photos={photos} />}

            {isLoading && <Loading />}
            {(!infinite || !photos.length) && <p>Não há mais postagens.</p>}
        </section>
    );
};

export default Feed;
