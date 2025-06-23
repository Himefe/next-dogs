import { z } from "zod/v4";
import { generateResponse } from "./api";

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

type TreeifiedError = {
    errors: string[];
    properties: Record<string, { errors: string[] }>;
};

export const validateFormDataSchema = (formData: FormData, schema: unknown) => {
    if (schema instanceof z.ZodType) {
        const object = Object.fromEntries(formData.entries());

        const { success, error } = schema.safeParse(object);

        if (!success) {
            const { properties: fieldErrors } = z.treeifyError(error) as TreeifiedError;

            return generateResponse({
                fieldErrors: simpleExtractFirstError(fieldErrors),
            });
        }
    }

    return generateResponse();
};
