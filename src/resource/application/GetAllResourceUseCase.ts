import { Resource } from "../domain/Resource";
import { ResourceRepository } from "../domain/ResourceRepository";

export class GetAllResourceUseCase {
  constructor(readonly resourceRepository: ResourceRepository) {}

  async run(): Promise<Resource[] | null> {
    try {
      const result = await this.resourceRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}