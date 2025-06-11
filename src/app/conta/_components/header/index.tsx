"use client";

import Link from "next/dist/client/link";
import styles from "./header.module.css";
import { getHeaderTitleByPathname } from "./utils";
import { usePathname } from "next/navigation";
import FeedIcon from "@/icons/feed";
import StatsIcon from "@/icons/stats";
import AddPostIcon from "@/icons/add-post";
import LogoutIcon from "@/icons/logout";
import useMedia from "@/hooks/use-media";
import { useState } from "react";
import classNames from "classnames";
import logoutAction from "@/actions/user-logout";

const UserAccountHeader = () => {
    const pathname = usePathname();
    const isMobile = useMedia("(max-width: 767px)");

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logoutAction();
    };

    return (
        <div className={styles["user-area"]}>
            <h1 className="title">{getHeaderTitleByPathname(pathname)}</h1>
            {isMobile && (
                <button
                    aria-label="Menu"
                    className={classNames(styles["menu-mobile"], isMobileMenuOpen && styles["menu-mobile--active"])}
                    onClick={setIsMobileMenuOpen.bind(this, (prev) => !prev)}
                />
            )}
            <nav
                className={classNames(
                    isMobile ? styles["nav-area-mobile"] : styles["nav-area"],
                    isMobileMenuOpen && styles["mobile--active"]
                )}
            >
                <Link title="Minha conta" href="/conta" className={pathname === "/conta" ? "active" : ""}>
                    <FeedIcon />
                    {isMobile && "Minha conta"}
                </Link>
                <Link
                    title="Estatísticas"
                    href="/conta/estatisticas"
                    className={pathname === "/conta/estatisticas" ? "active" : ""}
                >
                    <StatsIcon />
                    {isMobile && "Estatísticas"}
                </Link>
                <Link
                    title="Adicionar post"
                    href="/conta/postar"
                    className={pathname.includes("postar") ? "active" : ""}
                >
                    <AddPostIcon />
                    {isMobile && "Adicionar post"}
                </Link>
                <button title="Sair" onClick={handleLogout}>
                    <LogoutIcon />
                    {isMobile && "Sair"}
                </button>
            </nav>
        </div>
    );
};

export default UserAccountHeader;
