import { GetAllPlanUseCase } from "../application/GetAllPlanUseCase";
import { CreatePlanUseCase } from "../application/CreatePlanUseCase";
import { GetByIdPlanUseCase } from "../application/GetByIdPlanUseCase";
import { DeleteByIdPlanUseCase } from "../application/DeleteByIdPlanUseCase";
import { UpdateByIdPlanUseCase } from "../application/UpdateByIdPlanUseCase";
import { CreatePlanController } from "./controllers/CreatePlanController";
import { GetAllPlanController } from "./controllers/GetAllPlanController";
import { GetByIdPlanController } from "./controllers/GetByIdPlanController";
import { UpdateByIdPlanController } from "./controllers/UpdateByIdPlanController";
import { DeleteByIdPlanController } from "./controllers/DeleteByIdPlanController";
import { MysqlPlanRepository } from "./MysqlPlanRepository";

export const mysqlPlanRepository = new MysqlPlanRepository();

export const createPlanUseCase = new CreatePlanUseCase(
    mysqlPlanRepository
  );
export const getAllUseCase = new GetAllPlanUseCase(mysqlPlanRepository);

export const getByIdPlanUseCase = new GetByIdPlanUseCase(
    mysqlPlanRepository
  );

export const updateByIdPlanUseCase = new UpdateByIdPlanUseCase(
    mysqlPlanRepository
    );

export const deleteByIdPlanUseCase = new DeleteByIdPlanUseCase(
    mysqlPlanRepository
    );

export const createPlanController = new CreatePlanController(
    createPlanUseCase
);
export const getAllPlanController = new GetAllPlanController(
    getAllUseCase
);

export const getByIdPlanController = new GetByIdPlanController(
    getByIdPlanUseCase
);
export const deleteByIdPlanController = new DeleteByIdPlanController(
    deleteByIdPlanUseCase
    );
export const updateByIdPlanController = new UpdateByIdPlanController(
    updateByIdPlanUseCase
    );
  