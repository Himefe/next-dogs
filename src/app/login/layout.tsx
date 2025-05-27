import Image from "next/image";
import styles from "./login.module.css";

type LoginLayoutProps = {
    children: React.ReactNode;
};

const LoginLayout = ({ children }: LoginLayoutProps) => {
    return (
        <div className={styles.login}>
            <div className={styles["img-container"]}>
                <Image width={1200} height={1600} src="/assets/login.jpg" alt="Foto de um cachorro na tela de login" className={styles.img} />
            </div>
            {children}
        </div>
    );
};

export default LoginLayout;
