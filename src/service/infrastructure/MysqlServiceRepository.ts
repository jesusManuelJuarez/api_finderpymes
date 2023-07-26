import { Service } from "../domain/Service";
import { ServiceRepository } from "../domain/ServiceRepository";
import { query } from "../../database/mysql";

export class MysqlServiceRepository implements ServiceRepository {

  async getAll(): Promise<Service[] | null> {
    const sql = "SELECT * FROM service";
    try {
      const [info]: any = await query(sql, []);
      const infoService = Object.values(JSON.parse(JSON.stringify(info)));

      return infoService.map(
        (service: any) =>
          new Service(
            service.idService,
            service.name,
            service.description,
            service.image,
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Service | null> {
    const sql = "SELECT * FROM service WHERE idService=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Service(
        result[0].idService,
        result[0].name,
        result[0].description,
        result[0].image,
      );
    } catch (error) {
      return null;
    }
  }

  async createService(
    name: string,
    description: string,
    image: string,
  ): Promise<Service | null> {
    const sql =
      "INSERT INTO service (name, description, image) VALUES (?, ?, ?)";
    const params: any[] = [name, description, image];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Service(result.insertId, name, description, image);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newService: Partial<Service>): Promise<Service | null> {
    const sql =
      "UPDATE service SET name = ?, description = ?, image = ? WHERE idService = ?";
    const params: any[] = [
      newService.name || '', // Si newData.name es undefined, se asigna una cadena vacía
      newService.description || '', // Si newData.description es undefined, se asigna una cadena vacía
      newService.image || '', // Si newData.type es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedService = new Service(
        id,
        newService.name || '',
        newService.description || '',
        newService.image || '',
      );
      return updatedService;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM service WHERE idService = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
