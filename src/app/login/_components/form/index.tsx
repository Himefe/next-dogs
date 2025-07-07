"use client";

import Input from "@/components/core/input";
import Error from "@/components/error";
import { loginAction } from "@/actions/requests/login";
import { useActionState } from "react";
import { generateResponse } from "@/lib/api";
import Button from "@/components/core/button";
import styles from "./form.module.css";
import Link from "next/dist/client/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormState } from "./utils";
import { Controller, useForm } from "react-hook-form";

const LoginForm = () => {
    const [state, action, isSubmitting] = useActionState(loginAction, generateResponse());

    const { formState, control } = useForm<LoginFormState>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        defaultValues: {
            username: "",
            password: "",
        },
    });

    return (
        <form action={action}>
            <Controller
                control={control}
                name="username"
                render={({ field }) => (
                    <Input
                        error={formState.errors.username?.message || state.fieldErrors?.username}
                        placeholder="Digite seu usuário"
                        label="Usuário"
                        type="text"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field }) => (
                    <Input
                        error={formState.errors.password?.message || state.fieldErrors?.password}
                        placeholder="Digite sua senha"
                        label="Senha"
                        type="password"
                        {...field}
                    />
                )}
            />

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
