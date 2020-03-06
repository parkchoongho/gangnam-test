import express from "express";

const router = express.Router();

router.post("/encode", async (req, res) => {
  res.send("POST Encode");
});

router.get("/decode", async (req, res) => {
  res.send("GET Decode");
});

router.delete("/destroy", async (req, res) => {
  res.send("DELETE Destroy");
});

export default router;
