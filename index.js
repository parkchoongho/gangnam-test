import express from "express";
import dotenv from "dotenv";

import apiRouter from "./router/apiRouter";

dotenv.config();

const app = express();

const PORT = 4000;

app.use(express.json());

app.use("/api", apiRouter);

const handleListening = () => {
  console.log(`Listening on PORT: ${PORT}`);
};

app.listen(PORT, handleListening);
