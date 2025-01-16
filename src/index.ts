import { OpenAPIHono } from "@hono/zod-openapi";
import { app as todoRoute } from "./routes/todo";

const app = new OpenAPIHono();

app.get("/", (c) => {
  return c.json({
    ok: true,
    message: "Hello Hono",
  });
});

app.route("/todo", todoRoute);

export default app;
