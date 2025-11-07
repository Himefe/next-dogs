import styles from "./error.module.css";

type ErrorProps = {
    error: string;
};

const ErrorMessage = ({ error }: ErrorProps) => {
    return <p className={styles.error} dangerouslySetInnerHTML={{ __html: error }} />;
};

export default ErrorMessage;
