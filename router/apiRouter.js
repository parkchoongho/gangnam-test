import express from "express";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";

import { jwtConfig } from "../common/jwt_config";

const router = express.Router();

router.post("/encode", async (req, res) => {
  try {
    const { body } = req;

    const webtoken = await jwt.sign(body, jwtConfig.jwtSecret, {
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
  try {
    const {
      query: { jwt }
    } = req;

    const rawData = await jwtDecode(jwt);
    console.log(req.session);
    res.json(rawData);
  } catch (error) {
    res.status(500).json({
      result: false,
      error
    });
  }
});

router.delete("/destroy", (req, res, next) => {
  const { body } = req;

  if (req.session[body]) {
    delete req.session[body];
  }
  next();
});

export default router;
