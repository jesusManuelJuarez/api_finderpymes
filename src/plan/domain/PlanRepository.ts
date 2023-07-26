import { Plan } from "./Plan";

export interface PlanRepository {
  getAll(): Promise<Plan[] | null>;

  getById(id: number): Promise<Plan | null>;

  updateById(id: number, plan: Plan): Promise<Plan | null>;
  deleteById(id: number): Promise<boolean>;

  createPlan(
    price: string,
    duration: string,
  ): Promise<Plan | null>;
}
