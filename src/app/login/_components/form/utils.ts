import z from "zod/v4";

export const loginSchema = z.object({
    username: z.string().nonempty("Usuário obrigatório"),
    password: z.string().nonempty("Senha obrigatória"),
});

export type LoginFormState = z.infer<typeof loginSchema>;
