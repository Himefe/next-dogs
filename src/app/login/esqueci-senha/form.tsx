"use client";

import { loginPasswordLostAction } from "@/actions/requests/login";
import Error from "@/components/error";
import Button from "@/components/login/button";
import Input from "@/components/login/input";
import { generateResponse } from "@/lib/api";
import { useActionState } from "react";

const LoginForgotPasswordForm = () => {
    const [state, action] = useActionState(loginPasswordLostAction, generateResponse());

    return (
        <form action={action}>
            <Input label="Email / Usuário" name="login" type="text" />
            <input type="hidden" name="url" value={`${process.env.APP_URL_ORIGIN}/login/resetar`} />

            {!!state.error && <Error error={state.error} />}

            {state.ok ? <p style={{ color: "#4c1" }}>Email enviado.</p> : <Button pendingLabel="Enviando...">Enviar email</Button>}
        </form>
    );
};

export default LoginForgotPasswordForm;
