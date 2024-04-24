import { Router } from "express";

import storeController from "../../resources/store/store.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new storeController();
const storeRouter = Router();

storeRouter.delete("/delete", auth, service.delete);
storeRouter.post("/create", auth, service.create);
storeRouter.put("/update", auth, service.update);
storeRouter.get("/", auth, service.get);

export default storeRouter;