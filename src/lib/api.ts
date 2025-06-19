type Response<T = unknown, U = Record<string, string>> = {
    data: T | null;
    ok: boolean;
    error: string;
    fieldErrors?: U;
};

export const generateResponse = <T, U extends Record<string, string> = Record<string, string>>(
    param?: Partial<Response<T, U>>
): Response<T, U> => {
    const { data = null, error = "", ok = false, fieldErrors } = param || {};

    return { data, error, ok, fieldErrors };
};

export const apiError = (error: unknown): Response<null> => {
    const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro ao processar sua solicitação";

    return generateResponse({ error: errorMessage });
};
