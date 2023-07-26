import { PlanRepository } from "../domain/PlanRepository";

export class DeleteByIdPlanUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedPlan = await this.planRepository.deleteById(id);

      if (deletedPlan) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
