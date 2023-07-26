import { Plan } from "../domain/Plan";
import { PlanRepository } from "../domain/PlanRepository";

export class CreatePlanUseCase {
  constructor(readonly planRepository: PlanRepository) {}

  async run(
    price: string,
    duration: string,
  ): Promise<Plan | null> {
    try {
      const plan = await this.planRepository.createPlan(
        price,
        duration,
      );
      return plan;
    } catch (error) {
      return null;
    }
  }
}
