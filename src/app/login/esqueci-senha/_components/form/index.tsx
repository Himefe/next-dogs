"use client";

import { loginPasswordLostAction } from "@/actions/requests/login";
import Error from "@/components/error";
import Button from "@/components/login/button";
import Input from "@/components/login/input";
import { generateResponse } from "@/lib/api";
import { useActionState } from "react";

type LoginResetPasswordFormProps = {
    url: string;
};

const LoginForgotPasswordForm = ({ url }: LoginResetPasswordFormProps) => {
    const [state, action, isSubmitting] = useActionState(loginPasswordLostAction, generateResponse());

    return (
        <form action={action}>
            <Input disabled={!!state.ok} label="Email / Usuário" name="login" type="text" />
            <input type="hidden" name="url" value={url} />

            <Button disabled={!!state.ok} isLoading={isSubmitting} pendingLabel="Enviando...">
                Enviar email
            </Button>

            {!!state.error && <Error error={state.error} />}
            {!!state.ok && <p style={{ color: "#4c1", marginTop: "1rem" }}>Email enviado.</p>}
        </form>
    );
};

export default LoginForgotPasswordForm;
