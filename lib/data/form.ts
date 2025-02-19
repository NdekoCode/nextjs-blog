import { z } from 'zod';

import { postSchema } from '../schemas/post.schema';

export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "FirstName must be at least 2 character",
      })
      .max(255, {
        message: "The ... must be lower or equal to 255 character",
      }),
    lastName: z
      .string()
      .min(2, {
        message: "The lastName must be at least 2 character",
      })
      .max(255, {
        message: "The ... must be lower or equal to 255 character",
      }),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .required()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  });

export type RegisterFormType = z.infer<typeof registerFormSchema>;
export const registerFormDefaultValue: RegisterFormType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const loginFormSchema = z.object({
  email: z.string().email({
    message: "Provide a valid email address",
  }),
  password: z.string().min(4),
}).required();

export type LoginFormType = z.infer<typeof loginFormSchema>;
export const loginFormDefaultValue: LoginFormType = {
  email: "",
  password: "",
};
export type PostFormType = z.infer<typeof postSchema>