import { createFactory } from "hono/factory";
const factory = createFactory();

type Payload = {
  id: string;
};

const strictAuth = async (c: any, next: any) => {
  try {
    const { verify, decode } = await import("@tsndr/cloudflare-worker-jwt");
    const bearerTokenArr = c.req.header("Authorization")?.split(" ");
    let Bearer: string, token: string;
    if (bearerTokenArr?.length === 2) {
      [Bearer, token] = bearerTokenArr;
      if (Bearer === "Bearer") {
        const verified = await verify(token, c.env.JWT_SECRET);
        if (!verified) {
          c.status(401);
          return c.json({ error: "Require to be Authorized" });
        }
        const payload = decode<Payload>(token).payload;
        if (payload?.id) {
          const { id } = payload;
          c.set("id", id);
        }
        return await next();
      } else {
        throw new Error("invalid jwt");
      }
    } else {
      c.status(401);
      return c.json({ error: "Require to be Authorized" });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
};

const looseAuth = factory.createMiddleware(async (c: any, next: any) => {
  try {
    const { verify, decode } = await import("@tsndr/cloudflare-worker-jwt");
    const bearerTokenArr = c.req.header("Authorization")?.split(" ");
    let Bearer: string, token: string;
    if (bearerTokenArr?.length === 2) {
      [Bearer, token] = bearerTokenArr;
      if (Bearer === "Bearer") {
        const verified = await verify(token, c.env.JWT_SECRET);
        if (verified) {
          const payload = decode<Payload>(token).payload;
          if (payload?.id) {
            const { id } = payload;
            c.set("id", id);
          }
        }
      }
    }
    return await next();
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

export { strictAuth, looseAuth };
