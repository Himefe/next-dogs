export const simpleExtractFirstError = (properties?: Record<string, { errors: string[] }>): Record<string, string> => {
    const result: Record<string, string> = {};

    if (!properties) return result;

    for (const key in properties) {
        if (properties[key]?.errors.length) {
            result[key] = properties[key].errors[0];
        }
    }

    return result;
};
