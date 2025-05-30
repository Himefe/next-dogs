import stylesButton from "@/components/login/button/button.module.css";
import Link from "next/link";
import LoginForm from "./_components/form";
import styles from "./_components/form/form.module.css";

export const metadata = {
    title: "Next Dogs - Login",
    description: "Esta é a página de login do usuário no projeto dogs!",
};

export const dynamic = "force-static";

const LoginPage = () => {
    return (
        <section id="login" className="anime-left">
            <h1 className={styles.title}>Login</h1>
            <LoginForm />
            <Link className={styles["lost-password"]} href="/login/esqueci-senha">
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
