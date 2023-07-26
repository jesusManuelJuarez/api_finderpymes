"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.planRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.planRouter = express_1.default.Router();
exports.planRouter.get("/", Dependencies_2.getAllPlanController.run.bind(Dependencies_2.getAllPlanController));
exports.planRouter.get("/:idPlanFP", Dependencies_3.getByIdPlanController.run.bind(Dependencies_3.getByIdPlanController));
exports.planRouter.post("/", Dependencies_1.createPlanController.run.bind(Dependencies_1.createPlanController));
exports.planRouter.delete("/:idPlanFP", Dependencies_4.deleteByIdPlanController.run.bind(Dependencies_4.deleteByIdPlanController));
exports.planRouter.put("/:idPlanFP", Dependencies_5.updateByIdPlanController.run.bind(Dependencies_5.updateByIdPlanController));
