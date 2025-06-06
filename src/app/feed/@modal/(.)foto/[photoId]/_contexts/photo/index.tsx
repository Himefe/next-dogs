"use client";

import { FeedPhoto, FeedPhotoComment } from "@/types/feed";
import { User } from "@/types/user";
import { createContext, useContext } from "react";

export type PhotoContextType = Partial<{
    photo: FeedPhoto;
    comments: FeedPhotoComment[];
    user: User | null;
}>;

export const PhotoContext = createContext<PhotoContextType>({});

export const usePhoto = () => {
    const context = useContext(PhotoContext);

    if (!context) throw new Error("usePhoto must be used within PhotoContext.Provider");

    return context;
};
