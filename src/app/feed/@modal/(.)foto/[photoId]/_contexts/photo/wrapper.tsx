"use client";

import { ReactNode } from "react";
import { PhotoContext, PhotoContextType } from ".";

type PhotoProviderWrapperProps = {
    children: ReactNode;
    value: PhotoContextType;
};

const PhotoProviderWrapper = ({ children, value }: PhotoProviderWrapperProps) => {
    return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
};

export default PhotoProviderWrapper;
