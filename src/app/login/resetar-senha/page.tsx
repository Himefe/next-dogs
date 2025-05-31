import LoginResetPasswordForm from "./_components/form";

type LoginResetPasswordPageProps = {
    searchParams: {
        key: string;
        login: string;
    };
};

const LoginResetPasswordPage = ({ searchParams }: LoginResetPasswordPageProps) => {
    return (
        <section className="anime-left" id="login-reset-password">
            <h1 className="title">Resetar a senha</h1>
            <LoginResetPasswordForm keyToken={searchParams.key} login={searchParams.login} />
        </section>
    );
};

export default LoginResetPasswordPage;
