"use client";

import { Metadata } from "next";
import styles from "../../css/login-form.module.css";
import Input from "@/components/login/Input";
import { loginRegisterAction } from "@/actions/requests/login";
import Error from "@/components/error";
import SubmitButton from "../../components/submit-button";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { generateResponse } from "@/lib/api";

export const metadata: Metadata = {
    title: "Cadastrar",
    description: "Esta é a página de criação login do usuário, no projeto dogs!",
};

const LoginRegisterForm = () => {
    const [state, action] = useActionState(loginRegisterAction, generateResponse({ data: null }));

    const { replace } = useRouter();

    useEffect(() => {
        if (state.ok) replace("/login");
    }, [state.ok, replace]);

    return (
        <section className={styles.loginForm}>
            <div className="animeLeft">
                <h1 className={styles.title}>Cadastre-se</h1>
                <form action={action}>
                    <Input label="Usuário" type="text" name="username" id="usuario" />
                    <Input label="Email" type="email" name="email" id="email" />
                    <Input label="Senha" type="password" name="password" id="password" />
                    <SubmitButton label="Cadastrar" />

                    {!!state.error && <Error error={state.error} />}
                </form>
            </div>
        </section>
    );
};

export default LoginRegisterForm;
