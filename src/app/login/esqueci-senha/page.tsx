import { Metadata } from "next/dist/types";
import LoginForgotPasswordForm from "./_components/form";

export const metadata: Metadata = {
    title: "Next Dogs - Esqueci minha senha",
    description: "Esta é a página de esqueci minha senha do usuário no projeto dogs!",
};

export const dynamic = "force-static";

const LoginForgotPasswordPage = () => {
    return (
        <section className="anime-left" id="login-forgot-password">
            <h1 className="title">Perdeu a senha?</h1>
            <LoginForgotPasswordForm url={process.env.APP_URL_ORIGIN!} />
        </section>
    );
};

export default LoginForgotPasswordPage;
