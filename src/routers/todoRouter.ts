import express from "express";
import { todoController } from "~/controllers";

const todoRouter = express.Router();

todoRouter.get("/:id", todoController.getTodo);
todoRouter.get("/", todoController.getTodos);
todoRouter.post("/", todoController.postTodo);
todoRouter.patch("/:id", todoController.patchTodo);
todoRouter.delete("/:id", todoController.deleteTodo);

export { todoRouter };
