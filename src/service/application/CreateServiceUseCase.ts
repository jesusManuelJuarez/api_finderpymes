import { Service } from "../domain/Service";
import { ServiceRepository } from "../domain/ServiceRepository";

export class CreateServiceUseCase {
  constructor(readonly serviceRepository: ServiceRepository) {}

  async run(
    name: string,
    description: string,
    image : string
  ): Promise<Service | null> {
    try {
      const service = await this.serviceRepository.createService(
        name,
        description,
        image
      );
      return service;
    } catch (error) {
      return null;
    }
  }
}
