import { Metadata } from "next/dist/types";
import styles from "./add-post.module.css";
import classNames from "classnames";
import AddPostForm from "./_components/form";

export const metadata: Metadata = {
    title: "Next Dogs - Adicionar post",
    description: "Esta é a página de adicionar post do usuário no projeto dogs!",
};

const AddPostPage = () => {
    return (
        <div className={classNames("anime-left", styles["add-area"])}>
            <AddPostForm />
        </div>
    );
};

export default AddPostPage;
