import { Router } from "express";

import addressRouter from "./resources/address.router.js";
import storeRouter from "./resources/store.router.js";
import usersRouter from "./resources/users.router.js";

export const router = Router();

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

router.use('/address', addressRouter);
router.use('/store', storeRouter);
router.use('/user', usersRouter);