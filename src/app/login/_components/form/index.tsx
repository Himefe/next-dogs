"use client";

import Input from "@/components/login/input";
import Error from "@/components/error";
import { loginAction } from "@/actions/requests/login";
import { useActionState } from "react";
import { generateResponse } from "@/lib/api";
import Button from "@/components/login/button";
import styles from "./form.module.css";
import Link from "next/dist/client/link";

const LoginForm = () => {
    const [state, action, isSubmitting] = useActionState(loginAction, generateResponse());

    return (
        <form action={action}>
            <Input placeholder="Digite seu usuário" label="Usuário" type="text" id="usuario" name="username" />
            <Input placeholder="Digite sua senha" label="Senha" type="password" id="password" name="password" />
            <div className={styles["submit-button_container"]}>
                <Button pendingLabel="Entrando..." isLoading={isSubmitting}>
                    Entrar
                </Button>
                <Link className={styles["lost-password"]} href="/login/esqueci-senha">
                    Perdeu a Senha?
                </Link>
            </div>

            {!!state.error && <Error error={state.error} />}
        </form>
    );
};

export default LoginForm;
