import { Hono, HonoRequest } from "hono";
import userRouter from "./routes/user";
import postRouter from "./routes/post";
export type Env = {
  DATABASE_URL: string;
  DIRECT_URL: string;
  JWT_SECRET: string;
};

const app = new Hono();

app.route("/users", userRouter);
app.route("/posts", postRouter);

app.onError((err, c) => {
  console.error(`${err.message}`);
  return c.text("Custom Error Message", 500);
});

export default app;
