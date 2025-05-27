"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FeedPhoto } from "@/types/feed";

type FeedPhotosItemProps = {
    item: FeedPhoto;
};

const FeedPhotosItem = ({ item }: FeedPhotosItemProps) => {
    const [attAcesso, setAttAcesso] = useState(item.acessos);

    const { push } = useRouter();

    const handleClick = () => {
        //fetchs

        setAttAcesso((access) => Number(access) + 1);

        push(`/foto/${item.id}`);
    };

    return (
        <li>
            <div style={{ display: "grid", gridArea: "1/1" }}>
                <Image width={1000} height={1000} src={item.src} alt={item.title} />
            </div>
            <span onClick={handleClick}>{attAcesso}</span>
        </li>
    );
};

export default FeedPhotosItem;
