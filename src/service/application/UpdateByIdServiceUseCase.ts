import { Service } from "../domain/Service";
import { ServiceRepository } from "../domain/ServiceRepository";

export class UpdateByIdServiceUseCase {
  constructor(readonly serviceRepository: ServiceRepository) {}

  async run(id: number, newService: Partial<Service>): Promise<Service | null> {
    try {
      // Verificar si el dato existe
      const existingService = await this.serviceRepository.getById(id);
      if (!existingService) {
        return null;
      }

      // Realizar la actualización
      const updatedService = {
        ...existingService,
        ...newService,
      };

      const result = await this.serviceRepository.updateById(id, updatedService);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
