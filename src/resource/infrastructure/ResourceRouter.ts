import express from "express";


import { createResourceController } from "./Dependencies";
import { getAllResourceController } from "./Dependencies";
import { getByIdResourceController } from "./Dependencies";
import { deleteByIdResourceController } from "./Dependencies";
import { updateByIdResourceController } from "./Dependencies";

export const resourceRouter = express.Router();

resourceRouter.get("/", getAllResourceController.run.bind(getAllResourceController));
resourceRouter.get("/:idResource", getByIdResourceController.run.bind(getByIdResourceController));
resourceRouter.post("/", createResourceController.run.bind(createResourceController));
resourceRouter.delete("/:idResource", deleteByIdResourceController.run.bind(deleteByIdResourceController));
resourceRouter.put("/:idResource", updateByIdResourceController.run.bind(updateByIdResourceController));
