import express, { Request, Response, NextFunction } from "express";
import {
  deleteSurvey,
  getAllSurveys,
  getSurveyById,
  postSurvey,
  updateSurvey,
} from "./db";
const PORT = 3000;
const app = express();

app.use(express.json());

// GET /surveys: Fetch all surveys.
app.get("/survey", async (req: Request, res: Response) => {
  try {
    const result = await getAllSurveys();
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) return res.json({ error: error.message });
  }
});

// POST /surveys: Create a new survey.
app.post("/survey", async (req: Request, res: Response) => {
  try {
    const result = await postSurvey(req.body);
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) return res.json({ error: error.message });
  }
});

// GET /surveys/:id: Fetch a specific survey.
app.get("/survey/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getSurveyById(Number(id));
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) return res.json({ error: error.message });
  }
});

// PUT /surveys/:id: Update a specific survey.
app.put("/survey/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await updateSurvey(Number(id), req.body);
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) return res.json({ error: error.message });
  }
});

// DELETE /surveys/:id: Delete a specific survey.
app.delete("/survey/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteSurvey(Number(id));
    return res.json({ result, message: "deleted successfully" });
  } catch (error) {
    if (error instanceof Error) return res.json({ error: error.message });
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ error: err.message });
});

app.listen(PORT, () => console.log(`Listening on port 3000`));
