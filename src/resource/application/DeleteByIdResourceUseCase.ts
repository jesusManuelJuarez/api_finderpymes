import { ResourceRepository } from "../domain/ResourceRepository";

export class DeleteByIdResourceUseCase {
  constructor(private readonly resourceRepository: ResourceRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedResource = await this.resourceRepository.deleteById(id);

      if (deletedResource) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
