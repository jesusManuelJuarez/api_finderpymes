import { Request, Response } from "express";
import { GetAllPlanUseCase } from "../../application/GetAllPlanUseCase";

export class GetAllPlanController {
  constructor(readonly getAllPlanUseCase: GetAllPlanUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const plans = await this.getAllPlanUseCase.run();
      console.log(plans);
      if (plans)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: plans.map((plan: any) => {
            return {
              idPlanFP: plan.idPlanFP,
              price: plan.price,
              duration: plan.duration,
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
