import express from "express";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";

import { jwtConfig } from "../common/jwt_config";

const router = express.Router();

router.post("/encode", async (req, res) => {
  try {
    const { body } = req;
    console.log(jwtConfig.jwtSecret);
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
  const {
    query: { jwt }
  } = req;
  const rawData = await jwtDecode(jwt);
  console.log(req.session);
  res.json(rawData);
});

router.delete("/destroy", (req, res) => {
  const { body } = req;

  if (req.session[body]) {
    req.session.destroy(function(err) {
      if (err) {
        console.log("세션삭제 에러");
        return;
      }
    });
  }
  res.json({ result: "ㅗㅑ" });
});

export default router;
