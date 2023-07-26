import { Request, Response } from "express";
import { CreateServiceUseCase } from "../../application/CreateServiceUseCase";
import { Service } from "../../domain/Service";

export class CreateServiceController {
  constructor(private readonly createServiceUseCase: CreateServiceUseCase) {}

  async run(req: Request, res: Response) {
    const Service = req.body;
    try {
      const service = await this.createServiceUseCase.run(
        Service.name,
        Service.description,
        Service.image,
      );

      if (service)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Service: {
            idService: service?.idService,
            name: service?.name,
            description: service?.description,
            image: service?.image,
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
