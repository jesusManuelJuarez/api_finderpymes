import { GetAllResourceUseCase } from "../application/GetAllResourceUseCase";
import { CreateResourceUseCase } from "../application/CreateResourceUseCase";
import { GetByIdResourceUseCase } from "../application/GetByIdResourceUseCase";
import { DeleteByIdResourceUseCase } from "../application/DeleteByIdResourceUseCase";
import { UpdateByIdResourceUseCase } from "../application/UpdateByIdResourceUseCase";
import { CreateResourceController } from "./controllers/CreateResourceController";
import { GetAllResourceController } from "./controllers/GetAllResourceController";
import { GetByIdResourceController } from "./controllers/GetByIdResourceController";
import { UpdateByIdResourceController } from "./controllers/UpdateByIdResourceController";
import { DeleteByIdResourceController } from "./controllers/DeleteByIdResourceController";
import { MysqlResourceRepository } from "./MysqlResourceRepository";

export const mysqlResourceRepository = new MysqlResourceRepository();

export const createResourceUseCase = new CreateResourceUseCase(
    mysqlResourceRepository
  );
export const getAllResourceUseCase = new GetAllResourceUseCase(mysqlResourceRepository);

export const getByIdResourceUseCase = new GetByIdResourceUseCase(
    mysqlResourceRepository
  );

export const updateByIdResourceUseCase = new UpdateByIdResourceUseCase(
    mysqlResourceRepository
    );

export const deleteByIdResourceUseCase = new DeleteByIdResourceUseCase(
    mysqlResourceRepository
    );

export const createResourceController = new CreateResourceController(
    createResourceUseCase
);
export const getAllResourceController = new GetAllResourceController(
    getAllResourceUseCase
);

export const getByIdResourceController = new GetByIdResourceController(
    getByIdResourceUseCase
);
export const deleteByIdResourceController = new DeleteByIdResourceController(
    deleteByIdResourceUseCase
    );
export const updateByIdResourceController = new UpdateByIdResourceController(
    updateByIdResourceUseCase
    );
  