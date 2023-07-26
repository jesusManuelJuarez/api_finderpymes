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
exports.CreatePlanController = void 0;
class CreatePlanController {
    constructor(createplanUseCase) {
        this.createplanUseCase = createplanUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Plan = req.body;
            try {
                const plan = yield this.createplanUseCase.run(Plan.price, Plan.duration);
                if (plan)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        Plan: {
                            idPlanFP: plan === null || plan === void 0 ? void 0 : plan.idPlanFP,
                            price: plan === null || plan === void 0 ? void 0 : plan.price,
                            duration: plan === null || plan === void 0 ? void 0 : plan.duration,
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
exports.CreatePlanController = CreatePlanController;
