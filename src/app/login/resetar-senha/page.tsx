import LoginResetPasswordForm from "./_components/form";

type LoginResetPasswordPageProps = {
    searchParams: Promise<{
        key: string;
        login: string;
    }>;
};

const LoginResetPasswordPage = async ({ searchParams }: LoginResetPasswordPageProps) => {
    const { key, login } = await searchParams;

    return (
        <section className="anime-left" id="login-reset-password">
            <h1 className="title">Resetar a senha</h1>
            <LoginResetPasswordForm keyToken={key} login={login} />
        </section>
    );
};

export default LoginResetPasswordPage;
