import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    pendingLabel?: string;
    isLoading?: boolean;
};

const Button = ({ children, isLoading = false, pendingLabel = "Carregando...", ...props }: ButtonProps) => {
    return (
        <button disabled={isLoading} className={styles.button} {...props}>
            {isLoading ? pendingLabel : children}
        </button>
    );
};

export default Button;
