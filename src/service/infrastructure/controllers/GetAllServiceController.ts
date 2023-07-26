import { Request, Response } from "express";
import { GetAllServiceUseCase } from "../../application/GetAllServiceUseCase";

export class GetAllServiceController {
  constructor(readonly getAllServiceUseCase: GetAllServiceUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const services = await this.getAllServiceUseCase.run();
      console.log(services);
      if (services)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: services.map((service: any) => {
            return {
              idService: service.idService,
              name: service.name,
              description: service.description,
              image:  service.image,
            };
          }),
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
