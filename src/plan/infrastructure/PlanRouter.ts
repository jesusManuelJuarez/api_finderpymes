import express from "express";


import { createPlanController } from "./Dependencies";
import { getAllPlanController } from "./Dependencies";
import { getByIdPlanController } from "./Dependencies";
import { deleteByIdPlanController } from "./Dependencies";
import { updateByIdPlanController } from "./Dependencies";

export const planRouter = express.Router();

planRouter.get("/", getAllPlanController.run.bind(getAllPlanController));
planRouter.get("/:idPlanFP", getByIdPlanController.run.bind(getByIdPlanController));
planRouter.post("/", createPlanController.run.bind(createPlanController));
planRouter.delete("/:idPlanFP", deleteByIdPlanController.run.bind(deleteByIdPlanController));
planRouter.put("/:idPlanFP", updateByIdPlanController.run.bind(updateByIdPlanController));
