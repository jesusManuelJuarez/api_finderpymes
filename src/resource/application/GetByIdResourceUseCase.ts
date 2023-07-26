import { Resource } from "../domain/Resource";
import { ResourceRepository } from "../domain/ResourceRepository";

export class GetByIdResourceUseCase {
  constructor(readonly resourceRepository: ResourceRepository) {}

  async run(id: number): Promise<Resource | null> {
    try {
      const result = await this.resourceRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
