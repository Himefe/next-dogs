"use client";

import Button from "@/components/login/Button";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
    label?: string;
};

const SubmitButton = ({ label = "Entrar" }: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return <Button disabled={pending} nome={pending ? "Carregando..." : label} />;
};

export default SubmitButton;
