"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.resourceRouter = express_1.default.Router();
exports.resourceRouter.get("/", Dependencies_2.getAllResourceController.run.bind(Dependencies_2.getAllResourceController));
exports.resourceRouter.get("/:idResource", Dependencies_3.getByIdResourceController.run.bind(Dependencies_3.getByIdResourceController));
exports.resourceRouter.post("/", Dependencies_1.createResourceController.run.bind(Dependencies_1.createResourceController));
exports.resourceRouter.delete("/:idResource", Dependencies_4.deleteByIdResourceController.run.bind(Dependencies_4.deleteByIdResourceController));
exports.resourceRouter.put("/:idResource", Dependencies_5.updateByIdResourceController.run.bind(Dependencies_5.updateByIdResourceController));
