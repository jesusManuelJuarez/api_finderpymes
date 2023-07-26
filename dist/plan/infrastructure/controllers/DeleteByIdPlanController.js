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
exports.DeleteByIdPlanController = void 0;
class DeleteByIdPlanController {
    constructor(deleteByIdplanUseCase) {
        this.deleteByIdplanUseCase = deleteByIdplanUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.idPlanFP);
            try {
                const deletedPlan = yield this.deleteByIdplanUseCase.run(id);
                if (deletedPlan) {
                    // Código HTTP: 200 - Eliminación exitosa
                    res.status(200).send({
                        status: "success",
                        message: "Registro eliminado correctamente",
                    });
                }
                else {
                    // Código HTTP: 404 - Registro no encontrado
                    res.status(404).send({
                        status: "error",
                        message: "No se encontró el registro a eliminar",
                    });
                }
            }
            catch (error) {
                // Código HTTP: 500 - Error interno del servidor
                res.status(500).send({
                    status: "error",
                    message: "Ocurrió un error en la eliminación del registro",
                    error: error.message,
                });
            }
        });
    }
}
exports.DeleteByIdPlanController = DeleteByIdPlanController;
