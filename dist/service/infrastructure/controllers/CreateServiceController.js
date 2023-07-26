"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceController = void 0;
class CreateServiceController {
    constructor(createServiceUseCase) {
        this.createServiceUseCase = createServiceUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Service = req.body;
            try {
                const service = yield this.createServiceUseCase.run(Service.name, Service.description, Service.image);
                if (service)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        Service: {
                            idService: service === null || service === void 0 ? void 0 : service.idService,
                            name: service === null || service === void 0 ? void 0 : service.name,
                            description: service === null || service === void 0 ? void 0 : service.description,
                            image: service === null || service === void 0 ? void 0 : service.image,
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        Data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    Data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateServiceController = CreateServiceController;
