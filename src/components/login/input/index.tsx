import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";
import Error from "../../error";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    label: string;
};

const Input = ({ type, name, placeholder, id, label, onChange, error, value, onBlur }: InputProps) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input className={styles.input} placeholder={placeholder} type={type} name={name} id={id} value={value} onChange={onChange} onBlur={onBlur} />
            {!!error && <Error error={error} />}
        </div>
    );
};

export default Input;
