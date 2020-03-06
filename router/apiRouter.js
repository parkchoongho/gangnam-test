import express from "express";
import jwt from "jsonwebtoken";

import { jwtConfig } from "../common/jwt_config";

const router = express.Router();

router.post("/encode", async (req, res) => {
  try {
    if (req.get("Content-Type") !== "application/json") {
      res.status(404).send("입력 값 Type이 잘못 되었습니다.");
      return;
    }

    const { body } = req;

    const token = jwt.sign(body, jwtConfig.jwtSecret, {
      expiresIn: "1h"
    });
    req.session[token] = true;
    console.log(req.session);
    res.json({
      result: token
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
      query: { token }
    } = req;

    const rawData = jwt.verify(token, jwtConfig.jwtSecret);
    console.log(req.session);
    res.json(rawData);
  } catch (error) {
    res.json({
      result: false,
      error
    });
  }
});

router.delete("/destroy", (req, res, next) => {
  if (req.get("Content-Type") !== "text/plain") {
    res.status(404).send("입력 값 Type이 잘못 되었습니다.");
    return;
  }

  const { body } = req;

  if (req.session[body]) {
    delete req.session[body];
    res.send("해당 jwt가 session에서 삭제되었습니다.");
    return;
  }
  res.send("해당 jwt는 session에 존재하지 않습니다.");
});

export default router;
