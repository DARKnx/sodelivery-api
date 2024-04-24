import { Router } from "express";

import addressController from "../../resources/address/address.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new addressController();
const addressRouter = Router();

addressRouter.delete("/delete", auth, service.delete);
addressRouter.post("/create", auth, service.create);
addressRouter.put("/update", auth, service.update);
addressRouter.get("/", auth, service.get);

export default addressRouter;