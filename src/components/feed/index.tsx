"use client";

import { getFeedPhotos } from "@/actions/requests/feed";
import { useCallback, useEffect, useRef, useState } from "react";
import FeedPhotos from "./photos";
import { FeedPhoto } from "@/types/feed";
import Loading from "@/components/loading";
import styles from "./feed.module.css";

type FeedProps = {
    photos: FeedPhoto[];
    username?: string;
};

const VIEWPORT_HEIGHT_PERCENTAGE = 0.75;
const MAX_PHOTOS = 6;

const Feed = ({ photos: photosProps = [], username }: FeedProps) => {
    const [isInfinite, setIsInfinite] = useState(photosProps.length >= MAX_PHOTOS);
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
                const { data } = await getFeedPhotos({ page, total: MAX_PHOTOS, user: username });

                setPhotos((prevPhotos) => [...prevPhotos, ...(data || [])]);

                if ((data || []).length < MAX_PHOTOS) setIsInfinite(false);
            } catch (error) {
                console.log("error", error);
            }
        };

        handleGetFeedPhotos();
    }, [page, username]);

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
        <section className={styles["feed-container"]}>
            {!!photos.length && <FeedPhotos photos={photos} />}
            <div className={styles["loading-wrapper"]}>
                {isInfinite ? isLoading && <Loading /> : <p>Não há mais postagens.</p>}
            </div>
        </section>
    );
};

export default Feed;
