"use client";

import { getFeedPhotos } from "@/actions/requests/feed";
import { useCallback, useEffect, useRef, useState } from "react";
import FeedPhotos from "./photos";
import { FeedPhoto } from "@/types/feed";
import Loading from "@/components/loading";
import styles from "./feed.module.css";

type FeedProps = {
    photos: FeedPhoto[];
    userId?: string;
};

const VIEWPORT_HEIGHT_PERCENTAGE = 0.75;

const Feed = ({ photos: photosProps = [], userId }: FeedProps) => {
    const [isInfinite, setIsInfinite] = useState(photosProps.length < 6 ? false : true);
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState<FeedPhoto[]>(photosProps);
    const [isLoading, setIsLoading] = useState(false);

    const shouldWaitScroll = useRef(false);

    const handleInfiniteScroll = useCallback(() => {
        if (!isInfinite || shouldWaitScroll.current || isLoading) return;

        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        const canScroll = scroll > height * VIEWPORT_HEIGHT_PERCENTAGE;

        if (canScroll) {
            shouldWaitScroll.current = true;
            setIsLoading(true);

            setTimeout(() => {
                setPage((page) => page + 1);
                setIsLoading(false);
                shouldWaitScroll.current = false;
            }, 1000);
        }
    }, [isInfinite, isLoading]);

    useEffect(() => {
        if (page === 1) return;

        const handleGetFeedPhotos = async () => {
            try {
                const { data } = await getFeedPhotos({ page, total: 6, user: userId });

                setPhotos((prevPhotos) => [...prevPhotos, ...(data || [])]);

                if ((data || []).length < 6) setIsInfinite(false);
            } catch (error) {
                console.log("error", error);
            }
        };

        handleGetFeedPhotos();
    }, [page, userId]);

    useEffect(() => {
        if (isInfinite) {
            window.addEventListener("scroll", handleInfiniteScroll);
        } else {
            window.removeEventListener("scroll", handleInfiniteScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleInfiniteScroll);
        };
    }, [isInfinite, handleInfiniteScroll]);

    return (
        <section className="container main-container">
            {!!photos.length && <FeedPhotos photos={photos} />}
            <div className={styles["loading-wrapper"]}>{isInfinite ? isLoading && <Loading /> : <p>Não há mais postagens.</p>}</div>
        </section>
    );
};

export default Feed;
