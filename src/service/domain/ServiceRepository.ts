import { Service } from "./Service";

export interface ServiceRepository {
  getAll(): Promise<Service[] | null>;

  getById(id: number): Promise<Service | null>;

  updateById(id: number, service: Service): Promise<Service | null>;
  deleteById(id: number): Promise<boolean>;

  createService(
    name: string,
    description: string,
    image : string,
  ): Promise<Service | null>;
}
