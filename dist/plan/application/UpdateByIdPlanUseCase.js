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
exports.UpdateByIdPlanUseCase = void 0;
class UpdateByIdPlanUseCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    run(id, newPlan) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el dato existe
                const existingPlan = yield this.planRepository.getById(id);
                if (!existingPlan) {
                    return null;
                }
                // Realizar la actualización
                const updatedPlan = Object.assign(Object.assign({}, existingPlan), newPlan);
                const result = yield this.planRepository.updateById(id, updatedPlan);
                return result;
            }
            catch (error) {
                // Manejar errores
                throw error;
            }
        });
    }
}
exports.UpdateByIdPlanUseCase = UpdateByIdPlanUseCase;
