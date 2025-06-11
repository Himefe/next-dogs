"use client";

import dynamic from "next/dynamic";
const LoginForgotPasswordForm = dynamic(() => import("../form"), { ssr: false });

const LoginForgotPasswordContent = () => {
    return (
        <section className="anime-left" id="login-forgot-password">
            <h1 className="title">Perdeu a senha?</h1>
            <LoginForgotPasswordForm />
        </section>
    );
};

export default LoginForgotPasswordContent;
