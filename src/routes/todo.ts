import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { TodoParamSchema, TodoSchema, CreateTodoSchema } from "../models/todos";
import { MessageSchema } from "../models/error";

export const app = new OpenAPIHono();

const todoList = [
  {
    id: "1",
    title: "Learning Hono",
    completed: false,
  },
  {
    id: "2",
    title: "Implement Todo API",
    completed: true,
  },
  {
    id: "3",
    title: "Write documentation",
    completed: false,
  },
];

// GET Todo

const getTodoRoute = createRoute({
  method: "get",
  path: "/{id}",
  request: {
    params: TodoParamSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: TodoSchema,
        },
      },
      description: "Get Todo",
    },
    400: {
      description: "Bad Request",
      content: {
        "application/json": {
          schema: MessageSchema,
        },
      },
    },
    404: {
      content: {
        "application/json": {
          schema: MessageSchema,
        },
      },
      description: "Not Found",
    },
  },
  tags: ["todo"],
});

app.openapi(getTodoRoute, (c) => {
  const { id } = c.req.valid("param");
  const todo = todoList.find((todo) => todo.id === id);
});
