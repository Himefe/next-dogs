type Response<T = unknown> = Partial<{
    data: T | null;
    ok: boolean;
    error: string;
}>;

export const generateResponse = <T>(param?: Response<T>): Response<T> => {
    const { data = null, error = "", ok = false } = param || {};

    return { data, error, ok };
};

export const apiError = (error: unknown): Response<null> => {
    const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro ao processar sua solicitação";

    return generateResponse({ error: errorMessage });
};
