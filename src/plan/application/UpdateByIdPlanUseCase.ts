import { Plan } from "../domain/Plan";
import { PlanRepository } from "../domain/PlanRepository";

export class UpdateByIdPlanUseCase {
  constructor(readonly planRepository: PlanRepository) {}

  async run(id: number, newPlan: Partial<Plan>): Promise<Plan | null> {
    try {
      // Verificar si el dato existe
      const existingPlan = await this.planRepository.getById(id);
      if (!existingPlan) {
        return null;
      }

      // Realizar la actualización
      const updatedPlan = {
        ...existingPlan,
        ...newPlan,
      };

      const result = await this.planRepository.updateById(id, updatedPlan);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
