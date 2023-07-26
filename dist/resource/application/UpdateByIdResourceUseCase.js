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
exports.UpdateByIdResourceUseCase = void 0;
class UpdateByIdResourceUseCase {
    constructor(resourceRepository) {
        this.resourceRepository = resourceRepository;
    }
    run(id, newResource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el dato existe
                const existingResource = yield this.resourceRepository.getById(id);
                if (!existingResource) {
                    return null;
                }
                // Realizar la actualización
                const updatedResource = Object.assign(Object.assign({}, existingResource), newResource);
                const result = yield this.resourceRepository.updateById(id, updatedResource);
                return result;
            }
            catch (error) {
                // Manejar errores
                throw error;
            }
        });
    }
}
exports.UpdateByIdResourceUseCase = UpdateByIdResourceUseCase;
