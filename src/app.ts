import cors from "cors";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routers/userRouter";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());

// adicionar para cada rota nova uma linha com app.use(rota, router)
app.use("/users/", userRouter);

export default app;
