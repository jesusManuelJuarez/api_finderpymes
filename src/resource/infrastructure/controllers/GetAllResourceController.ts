import { Request, Response } from "express";
import { GetAllResourceUseCase } from "../../application/GetAllResourceUseCase";

export class GetAllResourceController {
  constructor(readonly getAllResourceUseCase: GetAllResourceUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const resources = await this.getAllResourceUseCase.run();
      console.log(resources);
      if (resources)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: resources.map((resource: any) => {
            return {
              idResource: resource.idResource,
              type:  resource.type,
              image: resource.image,
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
