import { Resource } from "../domain/Resource";
import { ResourceRepository } from "../domain/ResourceRepository";
import { query } from "../../database/mysql";

export class MysqlResourceRepository implements ResourceRepository {

  async getAll(): Promise<Resource[] | null> {
    const sql = "SELECT * FROM resource";
    try {
      const [info]: any = await query(sql, []);
      const infoResource = Object.values(JSON.parse(JSON.stringify(info)));

      return infoResource.map(
        (resource: any) =>
          new Resource(
            resource.idResource,
            resource.type,
            resource.image,
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Resource | null> {
    const sql = "SELECT * FROM resource WHERE idResource=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Resource(
        result[0].idResource,
        result[0].type,
        result[0].image,
      );
    } catch (error) {
      return null;
    }
  }

  async createResource(
    type: string,
    image: string,
  ): Promise<Resource | null> {
    const sql =
      "INSERT INTO resource (type, image) VALUES (?,?)";
    const params: any[] = [type, image];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Resource(result.insertId, type, image);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newResource: Partial<Resource>): Promise<Resource | null> {
    const sql =
      "UPDATE resource SET type = ?, image = ? WHERE idResource = ?";
    const params: any[] = [
      newResource.type || '', // Si newData.type es undefined, se asigna una cadena vacía
      newResource.image || '', // Si newData.website es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedResource = new Resource(
        id,
        newResource.type || '',
        newResource.image || '',
      );
      return updatedResource;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM resource WHERE idResource = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
