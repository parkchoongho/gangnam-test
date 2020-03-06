import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import apiRouter from "./router/apiRouter";

dotenv.config();

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(
  session({
    secret: "suseodd",
    resave: false,
    saveUninitialized: true
  })
);

app.use("/api", apiRouter);

const handleListening = () => {
  console.log(`✅  Listening on PORT: ${PORT}`);
};

app.listen(PORT, handleListening);
