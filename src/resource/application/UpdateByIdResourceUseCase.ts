import { Resource } from "../domain/Resource";
import { ResourceRepository } from "../domain/ResourceRepository";

export class UpdateByIdResourceUseCase {
  constructor(readonly resourceRepository: ResourceRepository) {}

  async run(id: number, newResource: Partial<Resource>): Promise<Resource | null> {
    try {
      // Verificar si el dato existe
      const existingResource = await this.resourceRepository.getById(id);
      if (!existingResource) {
        return null;
      }

      // Realizar la actualización
      const updatedResource = {
        ...existingResource,
        ...newResource,
      };

      const result = await this.resourceRepository.updateById(id, updatedResource);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
