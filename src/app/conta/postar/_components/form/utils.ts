import { z } from "zod/v4";

export const postPhotoSchema = z.object({
    nome: z.string().nonempty("Título obrigatório"),
    peso: z.string().nonempty("Peso obrigatório"),
    idade: z.string().nonempty("Idade obrigatória"),
    img: z
        .instanceof(File, { error: "Arquivo obrigatório" })
        .refine((file) => file.size > 0, "Arquivo obrigatório")
        .nonoptional({ error: "Arquivo obrigatório" }),
});

export type PostPhotoFormState = z.infer<typeof postPhotoSchema>;
