import { z } from "@hono/zod-openapi";

export const MessageShema = z.object({
    code: z.number().openapi({
        example: 400,
    }),
    message: z.string().openapi({
        example: "Bad Request",
    }),
});
