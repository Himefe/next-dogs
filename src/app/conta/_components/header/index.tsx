"use client";

import Link from "next/dist/client/link";
import styles from "./header.module.css";
import { getHeaderTitleByPathname } from "./utils";
import { usePathname } from "next/navigation";
import FeedIcon from "@/icons/feed";
import StatsIcon from "@/icons/stats";
import AddPostIcon from "@/icons/add-post";
import LogoutIcon from "@/icons/logout";

const UserAccountHeader = () => {
    const pathname = usePathname();

    const handleLogout = () => {};

    return (
        <div className={styles["user-area"]}>
            <h1 className="title">{getHeaderTitleByPathname(pathname)}</h1>
            <nav className={styles["nav-area"]}>
                <Link title="Minha conta" href="/conta" className={pathname === "/conta" ? "active" : ""}>
                    <FeedIcon />
                    {/* {mobile && 'Minhas Fotos'} */}
                </Link>
                <Link title="Estatísticas" href="/estatisticas" className={pathname === "/estatisticas" ? "active" : ""}>
                    <StatsIcon />
                    {/* {mobile && 'Minhas Fotos'} */}
                </Link>
                <Link title="Adicionar post" href="/adicionar-post" className={pathname === "/adicionar-post" ? "active" : ""}>
                    <AddPostIcon />
                    {/* {mobile && 'Minhas Fotos'} */}
                </Link>
                <button title="Sair" onClick={handleLogout}>
                    <LogoutIcon />
                    {/* {mobile && 'Sair'} */}
                </button>
            </nav>
        </div>
    );
};

export default UserAccountHeader;
