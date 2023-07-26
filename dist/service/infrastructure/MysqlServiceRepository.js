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
exports.MysqlServiceRepository = void 0;
const Service_1 = require("../domain/Service");
const mysql_1 = require("../../database/mysql");
class MysqlServiceRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM service";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoService = Object.values(JSON.parse(JSON.stringify(info)));
                return infoService.map((service) => new Service_1.Service(service.idService, service.name, service.description, service.image));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM service WHERE idService=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Service_1.Service(result[0].idService, result[0].name, result[0].description, result[0].image);
            }
            catch (error) {
                return null;
            }
        });
    }
    createService(name, description, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO service (name, description, image) VALUES (?, ?, ?)";
            const params = [name, description, image];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Service_1.Service(result.insertId, name, description, image);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newService) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE service SET name = ?, description = ?, image = ? WHERE idService = ?";
            const params = [
                newService.name || '',
                newService.description || '',
                newService.image || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedService = new Service_1.Service(id, newService.name || '', newService.description || '', newService.image || '');
                return updatedService;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM service WHERE idService = ?";
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
exports.MysqlServiceRepository = MysqlServiceRepository;
