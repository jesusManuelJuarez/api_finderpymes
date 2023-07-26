"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
const Dependencies_2 = require("./Dependencies");
const Dependencies_3 = require("./Dependencies");
const Dependencies_4 = require("./Dependencies");
const Dependencies_5 = require("./Dependencies");
exports.serviceRouter = express_1.default.Router();
exports.serviceRouter.get("/", Dependencies_2.getAllServiceController.run.bind(Dependencies_2.getAllServiceController));
exports.serviceRouter.get("/:idService", Dependencies_3.getByIdServiceController.run.bind(Dependencies_3.getByIdServiceController));
exports.serviceRouter.post("/", Dependencies_1.createServiceController.run.bind(Dependencies_1.createServiceController));
exports.serviceRouter.delete("/:idService", Dependencies_4.deleteByIdServiceController.run.bind(Dependencies_4.deleteByIdServiceController));
exports.serviceRouter.put("/:idService", Dependencies_5.updateByIdServiceController.run.bind(Dependencies_5.updateByIdServiceController));
