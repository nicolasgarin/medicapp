import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres de extensión.")
    .max(50, "El nombre no debe exceder de 50 caracteres de extensión."),
  email: z
    .string()
    .email("El email debe ser una dirección de correo electrónico válido."),
  phone: z
    .string()
    .refine(
      (phone) =>
        /^\+\d{10,15}$/.test(phone),
      "Número de teléfono no válido."
    ),
});
