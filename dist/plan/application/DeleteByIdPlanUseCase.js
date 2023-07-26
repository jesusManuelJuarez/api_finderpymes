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
exports.DeleteByIdPlanUseCase = void 0;
class DeleteByIdPlanUseCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedPlan = yield this.planRepository.deleteById(id);
                if (deletedPlan) {
                    return true; // Eliminación exitosa
                }
                else {
                    return false; // No se encontró el registro a eliminar
                }
            }
            catch (error) {
                throw new Error("Error en la eliminación del registro");
            }
        });
    }
}
exports.DeleteByIdPlanUseCase = DeleteByIdPlanUseCase;
