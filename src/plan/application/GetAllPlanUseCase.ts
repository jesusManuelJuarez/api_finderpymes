import { Plan } from "../domain/Plan";
import { PlanRepository } from "../domain/PlanRepository";

export class GetAllPlanUseCase {
  constructor(readonly planRepository: PlanRepository) {}

  async run(): Promise<Plan[] | null> {
    try {
      const result = await this.planRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}