import z from "zod/v4";

export const loginRegisterSchema = z.object({
    username: z.string().nonempty("Usuário obrigatório"),
    email: z.email("Email inválido").nonempty("Email obrigatório"),
    password: z.string().nonempty("Senha obrigatória"),
});

export type LoginRegisterFormState = z.infer<typeof loginRegisterSchema>;
