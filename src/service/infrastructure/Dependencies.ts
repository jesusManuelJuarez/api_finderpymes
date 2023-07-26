import { GetAllServiceUseCase } from "../application/GetAllServiceUseCase";
import { CreateServiceUseCase } from "../application/CreateServiceUseCase";
import { GetByIdServiceUseCase } from "../application/GetByIdServiceUseCase";
import { DeleteByIdServiceUseCase } from "../application/DeleteByIdServiceUseCase";
import { UpdateByIdServiceUseCase } from "../application/UpdateByIdServiceUseCase";
import { CreateServiceController } from "./controllers/CreateServiceController";
import { GetAllServiceController } from "./controllers/GetAllServiceController";
import { GetByIdServiceController } from "./controllers/GetByIdServiceController";
import { UpdateByIdServiceController } from "./controllers/UpdateByIdServiceController";
import { DeleteByIdServiceController } from "./controllers/DeleteByIdServiceController";
import { MysqlServiceRepository } from "./MysqlServiceRepository";

export const mysqlServiceRepository = new MysqlServiceRepository();

export const createServiceUseCase = new CreateServiceUseCase(
    mysqlServiceRepository
  );
export const getAllServiceUseCase = new GetAllServiceUseCase(mysqlServiceRepository);

export const getByIdServiceUseCase = new GetByIdServiceUseCase(
    mysqlServiceRepository
  );

export const updateByIdServiceUseCase = new UpdateByIdServiceUseCase(
    mysqlServiceRepository
    );

export const deleteByIdServiceUseCase = new DeleteByIdServiceUseCase(
    mysqlServiceRepository
    );

export const createServiceController = new CreateServiceController(
    createServiceUseCase
);
export const getAllServiceController = new GetAllServiceController(
    getAllServiceUseCase
);

export const getByIdServiceController = new GetByIdServiceController(
    getByIdServiceUseCase
);
export const deleteByIdServiceController = new DeleteByIdServiceController(
    deleteByIdServiceUseCase
    );
export const updateByIdServiceController = new UpdateByIdServiceController(
    updateByIdServiceUseCase
    );
  