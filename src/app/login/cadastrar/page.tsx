import LoginRegisterForm from "./_components/form";

export const dynamic = "force-static";

export const metadata = {
    title: "Next Dogs - Cadastrar",
    description: "Esta é a página de criação login do usuário no projeto dogs!",
};

const LoginRegisterPage = () => {
    return <LoginRegisterForm />;
};

export default LoginRegisterPage;
