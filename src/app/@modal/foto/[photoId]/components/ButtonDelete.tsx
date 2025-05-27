"use client";
import styles from "./css/ButtonDelete.module.css";

type ButtonDeleteProps = {
    photoId: number;
};

const ButtonDelete = ({ photoId }: ButtonDeleteProps) => {
    async function handleDelete() {
        window.confirm("Deseja realmente deletar esta foto?");

        console.log(photoId);
    }

    return (
        <>
            <button disabled={false} onClick={handleDelete} className={styles.delete}>
                Deletar
            </button>
        </>
    );
};

export default ButtonDelete;
