import express from "express";

import apiRouter from "./router/apiRouter";

const app = express();

const PORT = 4000;

app.use("/api", apiRouter);

const handleListening = () => {
  console.log(`Listening on PORT: ${PORT}`);
};

app.listen(PORT, handleListening);
