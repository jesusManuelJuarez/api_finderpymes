import { Resource } from "./Resource";

export interface ResourceRepository {
  getAll(): Promise<Resource[] | null>;

  getById(id: number): Promise<Resource | null>;

  updateById(id: number, resource: Resource): Promise<Resource | null>;
  deleteById(id: number): Promise<boolean>;

  createResource(
    type : string,
    image : string,
  ): Promise<Resource | null>;
}
