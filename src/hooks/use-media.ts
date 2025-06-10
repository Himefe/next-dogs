import React, { useState } from "react";

const useMedia = (media: string) => {
    const [isMatched, setIsMatched] = useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            const { matches } = window.matchMedia(media);
            setIsMatched(matches);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [media]);

    return isMatched;
};

export default useMedia;
