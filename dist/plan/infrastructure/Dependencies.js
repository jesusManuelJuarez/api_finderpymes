"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateByIdPlanController = exports.deleteByIdPlanController = exports.getByIdPlanController = exports.getAllPlanController = exports.createPlanController = exports.deleteByIdPlanUseCase = exports.updateByIdPlanUseCase = exports.getByIdPlanUseCase = exports.getAllUseCase = exports.createPlanUseCase = exports.mysqlPlanRepository = void 0;
const GetAllPlanUseCase_1 = require("../application/GetAllPlanUseCase");
const CreatePlanUseCase_1 = require("../application/CreatePlanUseCase");
const GetByIdPlanUseCase_1 = require("../application/GetByIdPlanUseCase");
const DeleteByIdPlanUseCase_1 = require("../application/DeleteByIdPlanUseCase");
const UpdateByIdPlanUseCase_1 = require("../application/UpdateByIdPlanUseCase");
const CreatePlanController_1 = require("./controllers/CreatePlanController");
const GetAllPlanController_1 = require("./controllers/GetAllPlanController");
const GetByIdPlanController_1 = require("./controllers/GetByIdPlanController");
const UpdateByIdPlanController_1 = require("./controllers/UpdateByIdPlanController");
const DeleteByIdPlanController_1 = require("./controllers/DeleteByIdPlanController");
const MysqlPlanRepository_1 = require("./MysqlPlanRepository");
exports.mysqlPlanRepository = new MysqlPlanRepository_1.MysqlPlanRepository();
exports.createPlanUseCase = new CreatePlanUseCase_1.CreatePlanUseCase(exports.mysqlPlanRepository);
exports.getAllUseCase = new GetAllPlanUseCase_1.GetAllPlanUseCase(exports.mysqlPlanRepository);
exports.getByIdPlanUseCase = new GetByIdPlanUseCase_1.GetByIdPlanUseCase(exports.mysqlPlanRepository);
exports.updateByIdPlanUseCase = new UpdateByIdPlanUseCase_1.UpdateByIdPlanUseCase(exports.mysqlPlanRepository);
exports.deleteByIdPlanUseCase = new DeleteByIdPlanUseCase_1.DeleteByIdPlanUseCase(exports.mysqlPlanRepository);
exports.createPlanController = new CreatePlanController_1.CreatePlanController(exports.createPlanUseCase);
exports.getAllPlanController = new GetAllPlanController_1.GetAllPlanController(exports.getAllUseCase);
exports.getByIdPlanController = new GetByIdPlanController_1.GetByIdPlanController(exports.getByIdPlanUseCase);
exports.deleteByIdPlanController = new DeleteByIdPlanController_1.DeleteByIdPlanController(exports.deleteByIdPlanUseCase);
exports.updateByIdPlanController = new UpdateByIdPlanController_1.UpdateByIdPlanController(exports.updateByIdPlanUseCase);
