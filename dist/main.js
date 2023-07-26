"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PlanRouter_1 = require("./plan/infrastructure/PlanRouter");
const ResourceRouter_1 = require("./resource/infrastructure/ResourceRouter");
const ServiceRouter_1 = require("./service/infrastructure/ServiceRouter");
const signale_1 = require("signale");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
const swaggerDocument = yamljs_1.default.load('swagger.yaml');
// Rutas para los recursos de data fiscal, source y address
app.use("/plan", PlanRouter_1.planRouter);
app.use("/resource", ResourceRouter_1.resourceRouter);
app.use("/service", ServiceRouter_1.serviceRouter);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.listen(3000, () => {
    signale.success("[Application] Server online on port 3000");
});
