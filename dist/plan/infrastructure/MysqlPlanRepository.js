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
exports.MysqlPlanRepository = void 0;
const Plan_1 = require("../domain/Plan");
const mysql_1 = require("../../database/mysql");
class MysqlPlanRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM plan";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoPlan = Object.values(JSON.parse(JSON.stringify(info)));
                return infoPlan.map((plan) => new Plan_1.Plan(plan.idPlanFP, plan.price, plan.duration));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM plan WHERE idPlanFP=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Plan_1.Plan(result[0].idPlanFP, result[0].price, result[0].duration);
            }
            catch (error) {
                return null;
            }
        });
    }
    createPlan(price, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO plan (price, duration) VALUES (?, ?)";
            const params = [price, duration];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Plan_1.Plan(result.insertId, price, duration);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newPlan) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE plan SET price = ?, duration = ? WHERE idPlanFP = ?";
            const params = [
                newPlan.price || '',
                newPlan.duration || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedPlan = new Plan_1.Plan(id, newPlan.price || '', newPlan.duration || '');
                return updatedPlan;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM plan WHERE idPlanFP = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                return false; // Error en la eliminación
            }
        });
    }
}
exports.MysqlPlanRepository = MysqlPlanRepository;
