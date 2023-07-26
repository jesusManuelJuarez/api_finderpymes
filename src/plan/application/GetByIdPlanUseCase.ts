import { Plan } from "../domain/Plan";
import { PlanRepository } from "../domain/PlanRepository";

export class GetByIdPlanUseCase {
  constructor(readonly planRepository: PlanRepository) {}

  async run(id: number): Promise<Plan | null> {
    try {
      const result = await this.planRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
