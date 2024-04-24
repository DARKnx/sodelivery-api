import { handleRequest } from "../../app.js";
import Service from "./address.service.js";

export default class Controller {
	service = new Service();
	
	create = async (req, res) => handleRequest(req, res, this.service.create);
	delete = async (req, res) => handleRequest(req, res, this.service.delete);
	update = async (req, res) => handleRequest(req, res, this.service.update);
	get = async (req, res) => handleRequest(req, res, this.service.get);
}
