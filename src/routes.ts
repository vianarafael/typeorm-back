import { Router, Request, Response } from "express";
import { getTasks } from "./controller/TasksController";
const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "What's up CC20/J5?" });
});

routes.get("/tasks", getTasks);

export default routes;
