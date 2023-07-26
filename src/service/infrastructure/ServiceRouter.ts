import express from "express";


import { createServiceController } from "./Dependencies";
import { getAllServiceController } from "./Dependencies";
import { getByIdServiceController } from "./Dependencies";
import { deleteByIdServiceController } from "./Dependencies";
import { updateByIdServiceController } from "./Dependencies";

export const serviceRouter = express.Router();

serviceRouter.get("/", getAllServiceController.run.bind(getAllServiceController));
serviceRouter.get("/:idService", getByIdServiceController.run.bind(getByIdServiceController));
serviceRouter.post("/", createServiceController.run.bind(createServiceController));
serviceRouter.delete("/:idService", deleteByIdServiceController.run.bind(deleteByIdServiceController));
serviceRouter.put("/:idService", updateByIdServiceController.run.bind(updateByIdServiceController));
