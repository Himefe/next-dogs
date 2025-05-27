"use client";

import { useGetUser } from "@/contexts/user";
import Link from "next/link";
import styles from "../Header.module.css";

const HeaderLoginButton = () => {
    const { user } = useGetUser();

    return (
        <Link href={user?.nome ? "/conta" : "/login"} className={styles.login}>
            {user?.nome ? user.nome : "Login / Criar"}
        </Link>
    );
};

export default HeaderLoginButton;
