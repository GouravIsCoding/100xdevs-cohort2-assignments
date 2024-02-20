import { PrismaClient } from "@prisma/client/edge";

const registerUser = async (
  email: string,
  username: string,
  password: string,
  DATABASE_URL: string
) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
    });

    const exists = await prisma.user.findMany({
      where: {
        OR: [
          {
            email,
          },
          {
            username,
          },
        ],
      },
    });
    if (exists.length > 0) {
      throw new Error("email or username already exists");
    }

    const result = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const signinUser = async (
  email: string,
  password: string,
  DATABASE_URL: string
) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
    });

    const result = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export { registerUser, signinUser };
