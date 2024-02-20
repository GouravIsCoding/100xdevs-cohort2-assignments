import { Hono } from "hono";
import { strictAuth, looseAuth } from "../middleware/auth";
import { registerUser, signinUser } from "../db/user";
import { Env } from "../index";
import {
  getPosts,
  createPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../db/post";

const validTags = [
  "javascript",
  "react",
  "node",
  "express",
  "mongodb",
  "postgres",
  "typescript",
];

type Variables = {
  id: number;
};

const post = new Hono<{ Bindings: Env; Variables: Variables }>();

post.get("", looseAuth, async (c) => {
  try {
    const id = c.get("id");
    let result;
    if (!id) result = await getPosts(-1, c.env.DATABASE_URL);
    else result = await getPosts(id, c.env.DATABASE_URL);
    return c.json({ result });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

post.post("", strictAuth, async (c) => {
  try {
    const authorId = c.get("id");
    const { title, body, tag } = await c.req.json();
    const isValid = tag.reduce(
      (acc: boolean, cur: string) => acc && validTags.includes(cur),
      true
    );
    if (!isValid) return c.json({ error: "invalid tag(s)" });
    const result = await createPosts(
      authorId,
      title,
      body,
      tag,
      c.env.DATABASE_URL
    );
    return c.json({ result });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

post.get("/:postId", looseAuth, async (c) => {
  try {
    const authorId = c.get("id");
    const postId = Number(c.req.param("postId"));
    const result = await getPostById(postId, c.env.DATABASE_URL);
    const editable = result?.authorId === authorId;
    const finalResult = { ...result, editable };
    return c.json({ result: finalResult });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

post.put("/:postId", strictAuth, async (c) => {
  try {
    const authorId = c.get("id");
    const { title, body, tag } = await c.req.json();
    const postId = Number(c.req.param("postId"));
    const result = await updatePost(
      authorId,
      postId,
      c.env.DATABASE_URL,
      title,
      body,
      tag
    );
    return c.json({ result });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

post.delete("/:postId", strictAuth, async (c) => {
  try {
    const authorId = c.get("id");
    const postId = Number(c.req.param("postId"));

    const result = await deletePost(authorId, postId, c.env.DATABASE_URL);

    return c.json({ result });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      c.status(400);
      return c.json({ error: error?.message });
    }
  }
});

export default post;
