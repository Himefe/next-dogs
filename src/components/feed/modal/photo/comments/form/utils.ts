import { z } from "zod/v4";

export const photoCommentSchema = z.object({
    comment: z.string().trim().nonempty("Comentário obrigatório"),
});

export type PhotoCommentFormState = z.infer<typeof photoCommentSchema>;
