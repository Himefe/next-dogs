import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    nome: string;
};

const Button = ({ nome, ...props }: ButtonProps) => {
    return (
        <button className={styles.button} {...props}>
            {nome}
        </button>
    );
};

export default Button;
