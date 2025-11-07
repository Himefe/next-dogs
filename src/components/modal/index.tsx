"use client";

import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children?: React.ReactNode;
    onClose?: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
    const router = useRouter();

    const [isModalHydrated, setIsModalHydrated] = useState(false);

    const handleCloseModal = useCallback(
        (event: SyntheticEvent<HTMLDivElement> | KeyboardEvent) => {
            if (onClose) {
                return onClose();
            }

            const hasTarget = event.target === event.currentTarget;
            const isKeyboardEvent = event instanceof KeyboardEvent && event.key === "Escape";

            if (hasTarget || isKeyboardEvent) {
                router.back();
            }
        },
        [onClose, router]
    );

    useEffect(() => {
        if (isModalHydrated) {
            globalThis.addEventListener("keydown", handleCloseModal);
        }

        return () => {
            globalThis.removeEventListener("keydown", handleCloseModal);
        };
    }, [isModalHydrated, handleCloseModal]);

    useEffect(() => {
        setIsModalHydrated(true);

        return () => setIsModalHydrated(false);
    }, []);

    if (!isModalHydrated) return null;

    return createPortal(
        <div data-testid="modal" className="modal" onClick={handleCloseModal}>
            <div className="modal-content">{children}</div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default Modal;
