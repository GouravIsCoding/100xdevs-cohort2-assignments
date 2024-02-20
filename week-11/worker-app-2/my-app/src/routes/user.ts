import { Hono } from "hono";

import { registerUser, signinUser } from "../db/user";
import { Env } from "../index";

const user = new Hono<{ Bindings: Env }>();

user.post("/signup", async (c) => {
  try {
    const { email, username, password } = await c.req.json();

    const result = await registerUser(
      email,
      username,
      password,
      c.env.DATABASE_URL
    );

    return c.json(result);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

user.post("/signin", async (c) => {
  try {
    const { sign } = await import("@tsndr/cloudflare-worker-jwt");

    const { email, password } = await c.req.json();

    const correct = await signinUser(email, password, c.env.DATABASE_URL);

    if (!correct) {
      c.status(401);
      return c.json({ error: "email or password incorrect" });
    }
    const { id } = correct;

    const token = await sign({ id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

export default user;
