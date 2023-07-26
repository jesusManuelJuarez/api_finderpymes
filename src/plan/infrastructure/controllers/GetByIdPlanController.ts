import { Request, Response } from "express";
import { GetByIdPlanUseCase } from "../../application/GetByIdPlanUseCase";

export class GetByIdPlanController {
  constructor(readonly getByIdPlanUseCase: GetByIdPlanUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idPlanFP);
    try {
      const plan = await this.getByIdPlanUseCase.run(id);

      if (plan)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idPlanFP: plan.idPlanFP,
              price: plan.price,
              duration: plan.duration,
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
