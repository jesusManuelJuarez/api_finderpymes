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
exports.MysqlResourceRepository = void 0;
const Resource_1 = require("../domain/Resource");
const mysql_1 = require("../../database/mysql");
class MysqlResourceRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM resource";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoResource = Object.values(JSON.parse(JSON.stringify(info)));
                return infoResource.map((resource) => new Resource_1.Resource(resource.idResource, resource.type, resource.image));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM resource WHERE idResource=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Resource_1.Resource(result[0].idResource, result[0].type, result[0].image);
            }
            catch (error) {
                return null;
            }
        });
    }
    createResource(type, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO resource (type, image) VALUES (?,?)";
            const params = [type, image];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Resource_1.Resource(result.insertId, type, image);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newResource) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE resource SET type = ?, image = ? WHERE idResource = ?";
            const params = [
                newResource.type || '',
                newResource.image || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedResource = new Resource_1.Resource(id, newResource.type || '', newResource.image || '');
                return updatedResource;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM resource WHERE idResource = ?";
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
exports.MysqlResourceRepository = MysqlResourceRepository;
