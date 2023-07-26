import { ServiceRepository } from "../domain/ServiceRepository";

export class DeleteByIdServiceUseCase {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedService = await this.serviceRepository.deleteById(id);

      if (deletedService) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
