import { Request, Response } from "express";
import { UpdateByIdPlanUseCase } from "../../application/UpdateByIdPlanUseCase";

export class UpdateByIdPlanController {
  constructor(readonly updateByIdPlanUseCase: UpdateByIdPlanUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idPlanFP);
    const newPlan = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedPlan = await this.updateByIdPlanUseCase.run(id, newPlan);

      if (updatedPlan) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idPlanFP: updatedPlan.idPlanFP,
            price: updatedPlan.price,
            duration: updatedPlan.duration,
          },
        });
      } else {
        // Código HTTP: 400 -> Error de actualización
        res.status(400).send({
          status: "error",
          msn: "No se pudo actualizar el dato",
        });
      }
    } catch (error) {
      // Código HTTP: 500 -> Error interno del servidor
      res.status(500).send({
        status: "error",
        info: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
