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
exports.UpdateByIdServiceUseCase = void 0;
class UpdateByIdServiceUseCase {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    run(id, newService) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el dato existe
                const existingService = yield this.serviceRepository.getById(id);
                if (!existingService) {
                    return null;
                }
                // Realizar la actualización
                const updatedService = Object.assign(Object.assign({}, existingService), newService);
                const result = yield this.serviceRepository.updateById(id, updatedService);
                return result;
            }
            catch (error) {
                // Manejar errores
                throw error;
            }
        });
    }
}
exports.UpdateByIdServiceUseCase = UpdateByIdServiceUseCase;
