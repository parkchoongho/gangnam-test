import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on PORT: ${PORT}`);
};

app.listen(PORT, handleListening);
