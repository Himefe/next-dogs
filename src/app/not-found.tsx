import Link from "next/link";

export const metadata = {
    title: "Next Dogs - Página não encontrada",
    description: "Esta é a página de erro 404 do projeto dogs!",
};

const NotFoundPage = () => {
    return (
        <section className="container">
            <h1 className="title">Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <p>
                Você pode voltar para a <Link href="/">página inicial</Link>.
            </p>
        </section>
    );
};

export default NotFoundPage;
