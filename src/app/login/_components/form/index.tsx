"use client";

import Input from "@/components/login/input";
import Error from "@/components/error";
import { loginAction } from "@/actions/requests/login";
import { useActionState } from "react";
import { generateResponse } from "@/lib/api";
import Button from "@/components/login/button";

const LoginForm = () => {
    const [state, action, isSubmitting] = useActionState(loginAction, generateResponse());

    return (
        <form action={action}>
            <Input placeholder="Digite seu usuário" label="Usuário" type="text" id="usuario" name="username" />
            <Input placeholder="Digite sua senha" label="Senha" type="password" id="password" name="password" />
            <Button pendingLabel="Entrando..." isLoading={isSubmitting}>
                Entrar
            </Button>

            {!!state.error && <Error error={state.error} />}
        </form>
    );
};

export default LoginForm;
