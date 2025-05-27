import styles from "./Header.module.css";

import Link from "next/link";
import Image from "next/image";
import { getUserAction } from "@/actions/user";

const Header = async () => {
    const { data: user } = await getUserAction();

    return (
        <header className={styles.header}>
            <nav className={styles.navHeader + " container"}>
                <Link href="/" aria-label="Dogs - Home" className={styles.logo}>
                    <Image src={"/assets/dogs.svg"} priority={true} width={28} height={22} alt="Dogs header logo" />
                </Link>
                <Link href={user?.nome ? "/conta" : "/login"} className={styles.login}>
                    {user?.nome ? user.nome : "Login / Criar"}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
