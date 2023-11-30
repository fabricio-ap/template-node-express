import { NextFunction, Request, Response } from "express";
import { Todo } from "../models";
import todoRepository from "../repositories/todoRepository";

async function getTodo(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const todo = await todoRepository.getTodo(id);

  if (todo) res.json(todo);
  else res.sendStatus(404);
}

async function getTodos(req: Request, res: Response, next: NextFunction) {
  const todos = await todoRepository.getTodos();
  res.json(todos);
}

async function postTodo(req: Request, res: Response, next: NextFunction) {
  const todo = req.body as Todo;

  const result = await todoRepository.createTodo(todo);

  if (result) res.status(201).json(result);
  else res.sendStatus(400);
}

async function patchTodo(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const todo = req.body as Todo;

  console.log({ id, todo });

  const result = await todoRepository.updateTodo(id, todo);

  if (result) res.json(result);
  else res.sendStatus(404);
}

async function deleteTodo(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const success = await todoRepository.deleteTodo(id);

  if (success) res.sendStatus(204);
  else res.sendStatus(404);
}

export default {
  getTodo,
  getTodos,
  postTodo,
  patchTodo,
  deleteTodo,
};
