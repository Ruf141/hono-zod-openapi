import { z } from "@hono/zod-openapi";

export const TodoSchema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    title: z.string().openapi({ example: "Learning Hono" }),
    completed: z.boolean().openapi({ example: false }),
  })
  .openapi("TodoSchema");

export const TodoListSchema = z.array(TodoSchema).openapi("TodoSchema");

// GET, PUT, DELETE用のリクエストモデル
export const TodoParamSchema = z.object({
  id: z.string().openapi({ example: "1" }),
});

// POST用のリクエストモデル
export const CreateTodoSchema = z
  .object({
    title: z.string().openapi({ example: "Learning  Hono" }),
  })
  .openapi("CreateTodoSchema");
