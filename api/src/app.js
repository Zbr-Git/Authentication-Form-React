import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import syncDB from "../db/init.js";
import { connectionDB } from "../db/config.js";
import AuthRouter from "../routes/auth/index.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

connectionDB();
syncDB();

app.use("/api/auth", AuthRouter);

app.listen(3000, () => {
  console.log("Server running on Port: 3000");
});
