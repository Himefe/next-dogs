"use client";

import { loginPasswordLostAction } from "@/actions/requests/login";
import ErrorMessage from "@/components/error";
import Button from "@/components/core/button";
import Input from "@/components/core/input";
import { generateResponse } from "@/lib/api";
import { useActionState } from "react";

const LoginForgotPasswordForm = () => {
    const [state, action, isSubmitting] = useActionState(loginPasswordLostAction, generateResponse());

    return (
        <form action={action}>
            <Input disabled={!!state.ok} label="Email / Usuário" name="login" type="text" />
            <input type="hidden" name="url" value={window.location.href.replace("esqueci", "resetar")} />

            <Button disabled={!!state.ok} isLoading={isSubmitting} pendingLabel="Enviando...">
                Enviar email
            </Button>

            {!!state.error && <ErrorMessage error={state.error} />}
            {!!state.ok && <p style={{ color: "#4c1", marginTop: "1rem" }}>Email enviado.</p>}
        </form>
    );
};

export default LoginForgotPasswordForm;
