import { Router } from "express";

import ExampleController from "./app/controllers/ExampleController";

const routes = new Router();

routes.get("/example/:id", ExampleController.index);

export default routes;
