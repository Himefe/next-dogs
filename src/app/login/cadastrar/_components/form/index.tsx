"use client";

import { Metadata } from "next";
import styles from "@/app/login/_components/form/form.module.css";
import Input from "@/components/input";
import { loginRegisterAction } from "@/actions/requests/login";
import Error from "@/components/error";
import { useActionState } from "react";
import Button from "@/components/button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateResponse } from "@/lib/api";
import { Login } from "@/types/login";
import { LoginRegisterFormState, loginRegisterSchema } from "./utils";

export const metadata: Metadata = {
    title: "Cadastrar",
    description: "Esta é a página de criação login do usuário no projeto dogs!",
};

const LoginRegisterForm = () => {
    const [state, action, isSubmitting] = useActionState(
        loginRegisterAction,
        generateResponse<Login, Record<keyof LoginRegisterFormState, string>>()
    );

    const { formState, control } = useForm<LoginRegisterFormState>({
        resolver: zodResolver(loginRegisterSchema),
        mode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    return (
        <section className="anime-left" id="login-register">
            <h1 className={styles.title}>Cadastre-se</h1>
            <form action={action}>
                <Controller
                    control={control}
                    name="username"
                    render={({ field }) => (
                        <Input
                            {...field}
                            error={formState.errors.username?.message || state.fieldErrors?.username || ""}
                            name="username"
                            label="Usuário"
                            type="text"
                            id="usuario"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <Input
                            {...field}
                            error={formState.errors.email?.message || state.fieldErrors?.email || ""}
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <Input
                            {...field}
                            error={formState.errors.password?.message || state.fieldErrors?.password || ""}
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                        />
                    )}
                />
                <Button disabled={!formState.isValid} pendingLabel="Cadastrando..." isLoading={isSubmitting}>
                    Cadastrar
                </Button>

                {!!state.error && <Error error={state.error} />}
            </form>
        </section>
    );
};

export default LoginRegisterForm;
