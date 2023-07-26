import { Resource } from "../domain/Resource";
import { ResourceRepository } from "../domain/ResourceRepository";

export class CreateResourceUseCase {
  constructor(readonly resourceRepository: ResourceRepository) {}

  async run(
    type : string,
    image : string,
  ): Promise<Resource | null> {
    try {
      const resource = await this.resourceRepository.createResource(
        type,
        image,
      );
      return resource;
    } catch (error) {
      return null;
    }
  }
}
