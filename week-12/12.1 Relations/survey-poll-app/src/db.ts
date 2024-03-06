import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type optionsType = {
  text: string;
  votes: number;
};
type questionType = {
  text: string;
  options: optionsType[];
};

type surveyType = {
  title: string;
  questions: questionType[];
};

export const getAllSurveys = async () => {
  try {
    const result = await prisma.survey.findMany({
      select: {
        title: true,
        questions: {
          select: {
            text: true,
            options: {
              select: {
                text: true,
                votes: true,
              },
            },
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
export const postSurvey = async (surveyData: surveyType) => {
  try {
    const result = await prisma.survey.create({
      data: {
        title: surveyData.title,
        questions: {
          create: surveyData.questions.map((item) => ({
            text: item.text,
            options: {
              create: item.options.map((op) => ({
                text: op.text,
              })),
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const getSurveyById = async (surveyId: number) => {
  try {
    const result = await prisma.survey.findUnique({
      where: {
        id: surveyId,
      },
      select: {
        id: true,
        title: true,
        questions: {
          select: {
            id: true,
            text: true,
            options: {
              select: {
                id: true,
                text: true,
                votes: true,
              },
            },
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateSurvey = async (
  surveyId: number,
  surveyData: surveyType
) => {
  try {
    const result = await prisma.survey.update({
      where: {
        id: surveyId,
      },
      data: {
        title: surveyData.title,
        questions: {
          create: surveyData.questions.map((item) => ({
            text: item.text,
            options: {
              create: item.options.map((op) => ({
                text: op.text,
              })),
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteSurvey = async (surveyId: number) => {
  try {
    const result = prisma.survey.delete({
      where: {
        id: surveyId,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
