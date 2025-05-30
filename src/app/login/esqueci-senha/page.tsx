import { Metadata } from "next/dist/types";
import LoginForgotPasswordForm from "./form";

export const metadata: Metadata = {
    title: "Next Dogs - Esqueci minha senha",
    description: "Esta é a página de esqueci minha senha do usuário no projeto dogs!",
};

export const dynamic = "force-static";

const LoginForgotPasswordPage = async () => {
    return (
        <section className="anime-left" id="login-forgot-password">
            <h1 className="title">Perdeu a senha?</h1>
            <LoginForgotPasswordForm />
        </section>
    );
};

export default LoginForgotPasswordPage;
