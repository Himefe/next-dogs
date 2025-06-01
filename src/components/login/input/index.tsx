import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.css";
import Error from "../../error";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    label: string;
    ref?: React.Ref<HTMLInputElement>;
};

const Input = ({ label, error, ...props }: InputProps) => {
    return (
        <div className={styles["input-wrapper"]}>
            <label htmlFor={props.id} className={styles.label}>
                {label}
            </label>
            <input ref={props.ref} className={styles.input} {...props} />
            {!!error && <Error error={error} />}
        </div>
    );
};

export default Input;
