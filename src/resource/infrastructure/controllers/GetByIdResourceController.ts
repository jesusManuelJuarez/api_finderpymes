import { Request, Response } from "express";
import { GetByIdResourceUseCase } from "../../application/GetByIdResourceUseCase";

export class GetByIdResourceController {
  constructor(readonly getByIdResourceUseCase: GetByIdResourceUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idResource);
    try {
      const resource = await this.getByIdResourceUseCase.run(id);

      if (resource)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idResource: resource.idResource,
              type:  resource.type,
              image: resource.image,
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
