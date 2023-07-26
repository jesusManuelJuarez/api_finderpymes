import { Request, Response } from "express";
import { CreateResourceUseCase } from "../../application/CreateResourceUseCase";
import { Resource } from "../../domain/Resource";

export class CreateResourceController {
  constructor(private readonly createResourceUseCase: CreateResourceUseCase) {}

  async run(req: Request, res: Response) {
    const Resource = req.body;
    try {
      const resource = await this.createResourceUseCase.run(
        Resource.type,
        Resource.image,
      );

      if (resource)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Data: {
            idResource: resource?.idResource,
            type: resource?.type,
            image: resource?.image
          },
        });
      else
        res.status(204).send({
          status: "error",
          Data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        Data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
