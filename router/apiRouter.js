import express from "express";
import jwt from "jsonwebtoken";

import { jwtConfig } from "../common/jwt_config";

const router = express.Router();

router.post("/encode", async (req, res) => {
  try {
    const { body } = req;
    console.log(jwtConfig.jwtSecret);
    const webtoken = jwt.sign(body, jwtConfig.jwtSecret, {
      expiresIn: "1h"
    });
    req.session[webtoken] = true;
    console.log(req.session);
    res.json({
      result: webtoken
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error
    });
  }
});

router.get("/decode", async (req, res) => {
  res.send("GET Decode");
});

router.delete("/destroy", async (req, res) => {
  res.send("DELETE Destroy");
});

export default router;
