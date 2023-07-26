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
exports.CreateResourceController = void 0;
class CreateResourceController {
    constructor(createResourceUseCase) {
        this.createResourceUseCase = createResourceUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Resource = req.body;
            try {
                const resource = yield this.createResourceUseCase.run(Resource.type, Resource.image);
                if (resource)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        Data: {
                            idResource: resource === null || resource === void 0 ? void 0 : resource.idResource,
                            type: resource === null || resource === void 0 ? void 0 : resource.type,
                            image: resource === null || resource === void 0 ? void 0 : resource.image
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
exports.CreateResourceController = CreateResourceController;
