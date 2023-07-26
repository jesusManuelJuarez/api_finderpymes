import { Request, Response } from "express";
import { CreatePlanUseCase } from "../../application/CreatePlanUseCase";
import { Plan } from "../../domain/Plan";

export class CreatePlanController {
  constructor(private readonly createplanUseCase: CreatePlanUseCase) {}

  async run(req: Request, res: Response) {
    const Plan = req.body;
    try {
      const plan = await this.createplanUseCase.run(
        Plan.price,
        Plan.duration,
      );

      if (plan)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Plan: {
            idPlanFP: plan?.idPlanFP,
            price: plan?.price,
            duration: plan?.duration,
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
