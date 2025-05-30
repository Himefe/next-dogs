import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";
import { useFormStatus } from "react-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    pendingLabel?: string;
};

const Button = ({ children, pendingLabel = "Carregando...", ...props }: ButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className={styles.button} {...props}>
            {pending ? pendingLabel : children}
        </button>
    );
};

export default Button;
