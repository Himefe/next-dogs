"use client";

import Input from "@/components/login/Input";
import Error from "@/components/error";
import { loginAction } from "@/actions/login";
import SubmitButton from "./submit-button";
import { useActionState } from "react";
import { generateResponse } from "@/lib/api";

const LoginForm = () => {
    const [state, action] = useActionState(loginAction, generateResponse({ data: null }));

    return (
        <form action={action}>
            <Input placeholder="Digite seu usuário" label="Usuário" type="text" id="usuario" name="username" />
            <Input placeholder="Digite sua senha" label="Senha" type="password" id="password" name="password" />
            <SubmitButton />

            {!!state.error && <Error error={state.error} />}
        </form>
    );
};

export default LoginForm;
