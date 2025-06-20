"use client";

import { Metadata } from "next";
import styles from "@/app/login/_components/form/form.module.css";
import Input from "@/components/input";
import { loginRegisterAction } from "@/actions/requests/login";
import Error from "@/components/error";
import { useActionState } from "react";
import { generateResponse } from "@/lib/api";
import Button from "@/components/button";

export const metadata: Metadata = {
    title: "Cadastrar",
    description: "Esta é a página de criação login do usuário no projeto dogs!",
};

const LoginRegisterForm = () => {
    const [state, action, isSubmitting] = useActionState(loginRegisterAction, generateResponse());

    return (
        <section className="anime-left" id="login-register">
            <h1 className={styles.title}>Cadastre-se</h1>
            <form action={action}>
                <Input label="Usuário" type="text" name="username" id="usuario" />
                <Input label="Email" type="email" name="email" id="email" />
                <Input label="Senha" type="password" name="password" id="password" />
                <Button pendingLabel="Cadastrando..." isLoading={isSubmitting}>
                    Cadastrar
                </Button>

                {!!state.error && <Error error={state.error} />}
            </form>
        </section>
    );
};

export default LoginRegisterForm;
