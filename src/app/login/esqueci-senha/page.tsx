import { Metadata } from "next/dist/types";
import LoginForgotPasswordContent from "./_components/content";

export const metadata: Metadata = {
    title: "Next Dogs - Esqueci minha senha",
    description: "Esta é a página de esqueci minha senha do usuário no projeto dogs!",
};

const LoginForgotPasswordPage = () => {
    return <LoginForgotPasswordContent />;
};

export default LoginForgotPasswordPage;
