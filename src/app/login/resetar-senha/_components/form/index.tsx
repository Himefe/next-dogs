"use client";

import { loginPasswordResetAction } from "@/actions/requests/login";
import Error from "@/components/error";
import Button from "@/components/button";
import Input from "@/components/input";
import { generateResponse } from "@/lib/api";
import { useActionState } from "react";

type LoginResetPasswordFormProps = {
    login: string;
    keyToken: string;
};

const LoginResetPasswordForm = ({ keyToken, login }: LoginResetPasswordFormProps) => {
    const [state, action, isSubmitting] = useActionState(loginPasswordResetAction, generateResponse());

    return (
        <form action={action}>
            <Input label="Nova Senha" name="password" type="password" />
            <input type="hidden" name="login" value={login} />
            <input type="hidden" name="key" value={keyToken} />
            {state.error && <Error error={state.error} />}

            <Button pendingLabel="Resetando..." isLoading={isSubmitting}>
                Redefinir Senha
            </Button>
        </form>
    );
};

export default LoginResetPasswordForm;
