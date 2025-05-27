type Response<T = unknown> = {
    data: T | null;
    ok?: boolean;
    error?: string;
};

export const generateResponse = <T>({ data = null, error = "", ok = false }: Response<T>): Response<T> => ({ data, error, ok });

export const apiError = (error: unknown): Response<null> => {
    const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro ao processar sua solicitação";

    return generateResponse({ data: null, error: errorMessage, ok: false });
};
