import React from "react";

type FeedLayoutProps = Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>;

const FeedLayout = ({ children, modal }: FeedLayoutProps) => {
    return (
        <>
            {children}
            {modal}
        </>
    );
};

export default FeedLayout;
