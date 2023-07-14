import * as z from "zod";

const displayNameSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const changePassSchema = z
.object({
  currentPass: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  newPass: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  confirmPass: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
})
  .superRefine(({ newPass, confirmPass }, ctx) => {
    if (newPass !== confirmPass) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match"
      });
    }
  });

type displayNameType = z.infer<typeof displayNameSchema>;
type changePassType = z.infer<typeof changePassSchema>

export type {displayNameType,changePassType}
export {displayNameSchema,changePassSchema}