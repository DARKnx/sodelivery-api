import { Router } from "express";

import partyController from "../../resources/party/party.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new partyController();
const partyRouter = Router();

partyRouter.delete("/delete", auth, service.delete);
partyRouter.post("/create", auth, service.create);
partyRouter.put("/update", auth, service.update);
partyRouter.get("/", auth, service.get);

export default partyRouter;