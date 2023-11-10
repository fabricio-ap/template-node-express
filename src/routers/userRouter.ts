import express from "express";
import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", userController.getUser);
userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.postUser);
userRouter.patch("/:id", userController.patchUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
