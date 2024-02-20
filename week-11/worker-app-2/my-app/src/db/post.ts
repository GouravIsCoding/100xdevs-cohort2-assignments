import { PrismaClient } from "@prisma/client/edge";

const getPosts = async (authorId: number, DATABASE_URL: string) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
    });
    let result;
    if (authorId !== -1) {
      result = await prisma.post.findMany({
        take: 10,
        where: {
          authorId,
        },
      });
    } else {
      result = await prisma.post.findMany({
        take: 10,
      });
    }
    return result;
  } catch (error) {
    throw error;
  }
};

const createPosts = async (
  authorId: number,
  title: string,
  body: string,
  tag: string[],
  DATABASE_URL: string
) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
    });
    const result = await prisma.post.create({
      data: {
        title,
        body,
        authorId,
        tag,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const getPostById = async (id: number, DATABASE_URL: string) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
    });
    const result = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const updatePost = async (
  authorId: number,
  id: number,
  DATABASE_URL: string,
  title: string,
  body: string,
  tag: string[]
) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
    });

    const result = await prisma.post.update({
      where: {
        id,
        authorId,
      },
      data: {
        title,
        body,
        tag,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const deletePost = async (
  authorId: number,
  id: number,
  DATABASE_URL: string
) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
    });

    const result = await prisma.post.delete({
      where: {
        id,
        authorId,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

export { getPosts, getPostById, createPosts, updatePost, deletePost };
