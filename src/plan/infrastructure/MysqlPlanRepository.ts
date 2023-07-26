import { Plan } from "../domain/Plan";
import { PlanRepository } from "../domain/PlanRepository";
import { query } from "../../database/mysql";

export class MysqlPlanRepository implements PlanRepository {

  async getAll(): Promise<Plan[] | null> {
    const sql = "SELECT * FROM plan";
    try {
      const [info]: any = await query(sql, []);
      const infoPlan = Object.values(JSON.parse(JSON.stringify(info)));

      return infoPlan.map(
        (plan: any) =>
          new Plan(
            plan.idPlanFP,
            plan.price,
            plan.duration,
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Plan | null> {
    const sql = "SELECT * FROM plan WHERE idPlanFP=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Plan(
        result[0].idPlanFP,
        result[0].price,
        result[0].duration,
      );
    } catch (error) {
      return null;
    }
  }

  async createPlan(
    price: string,
    duration: string,
  ): Promise<Plan | null> {
    const sql =
      "INSERT INTO plan (price, duration) VALUES (?, ?)";
    const params: any[] = [price, duration];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Plan(result.insertId, price, duration);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newPlan: Partial<Plan>): Promise<Plan | null> {
    const sql =
      "UPDATE plan SET price = ?, duration = ? WHERE idPlanFP = ?";
    const params: any[] = [
      newPlan.price || '', // Si newData.name es undefined, se asigna una cadena vacía
      newPlan.duration || '', // Si newData.description es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedPlan = new Plan(
        id,
        newPlan.price || '',
        newPlan.duration || '',
      );
      return updatedPlan;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM plan WHERE idPlanFP = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
