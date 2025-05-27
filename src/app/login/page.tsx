import stylesButton from "@/components/login/Button.module.css";
import Link from "next/link";
import LoginForm from "./components/form";
import styles from "./css/login-form.module.css";

export const metadata = {
    title: "Login",
    description: "Esta é a página de login do usuário, no projeto dogs!",
};

export const dynamic = "force-static";

const LoginPage = () => {
    return (
        <section className={styles.loginForm + " animeLeft"}>
            <h1 className={styles.title}>Login</h1>
            <LoginForm />
            <Link className={styles.lostPassword} href="/login/perdeu">
                Perdeu a Senha?
            </Link>
            <div className={styles.cadastro}>
                <h2>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesButton.button} href="/login/cadastrar">
                    Cadastro
                </Link>
            </div>
        </section>
    );
};

export default LoginPage;
