import { Request, Response } from "express";
import { GetByIdServiceUseCase } from "../../application/GetByIdServiceUseCase";

export class GetByIdServiceController {
  constructor(readonly getByIdServiceUseCase: GetByIdServiceUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idService);
    try {
      const service = await this.getByIdServiceUseCase.run(id);

      if (service)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idService: service.idService,
              name: service.name,
              description: service.description,
              image:  service.image,
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        info: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
