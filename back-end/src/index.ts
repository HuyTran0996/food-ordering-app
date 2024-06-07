import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

mongoose
  .connect(process.env.DATABASE as string)
  .then(() => console.log("Connected to Database"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
