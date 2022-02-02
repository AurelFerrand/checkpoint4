import express from "express";
import middleware from "../services/middleware.js";

const router = express.Router();

router.get("/", middleware.verifyUser, async (req, res) => {
  res.send({ message: "Hello User" }).status(200);
});

export default router;
