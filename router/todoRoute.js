import { Router } from "express";
import { getTask, getAllTasks, createTask, updateTask, deleteTask} from "../controllers/todo.js";

const todoRouter = Router()

todoRouter.get("/:id", getTask)
todoRouter.get("/", getAllTasks)
todoRouter.post("/", createTask)
todoRouter.patch("/:id", updateTask)
todoRouter.delete("/:id", deleteTask)

export default todoRouter