"use client";

import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children?: React.ReactNode;
    onClose?: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
    const router = useRouter();

    const [isModalHydrated, setIsModalHydrated] = useState(false);

    const handleCloseModal = (event: SyntheticEvent<HTMLDivElement>) => {
        if (onClose) {
            return onClose();
        }

        if (event.target === event.currentTarget) {
            router.back();
        }
    };

    useEffect(() => {
        setIsModalHydrated(true);

        return () => setIsModalHydrated(false);
    }, []);

    if (!isModalHydrated) return null;

    return createPortal(
        <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content">{children}</div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default Modal;
