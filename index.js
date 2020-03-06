import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import bodyParser from "body-parser";

import apiRouter from "./router/apiRouter";

import { checkBlank } from "./middleware/checkBlank";

dotenv.config();

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(bodyParser.text());

app.use(
  session({
    secret: "didakeknklnsdf",
    resave: false,
    saveUninitialized: true
  })
);

app.use("/api", checkBlank, apiRouter);

const handleListening = () => {
  console.log(`✅  Listening on PORT: ${PORT}`);
};

app.listen(PORT, handleListening);
