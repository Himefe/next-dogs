import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<{
        pendingLabel: string;
        isLoading: boolean;
        className: string;
    }>;

const Button = ({
    children,
    isLoading = false,
    pendingLabel = "Carregando...",
    disabled = false,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button disabled={disabled || isLoading} className={classNames(styles.button, className)} {...props}>
            {isLoading ? pendingLabel : children}
        </button>
    );
};

export default Button;
