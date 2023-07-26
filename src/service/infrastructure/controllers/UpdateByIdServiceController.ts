import { Request, Response } from "express";
import { UpdateByIdServiceUseCase } from "../../application/UpdateByIdServiceUseCase";

export class UpdateByIdServiceController {
  constructor(readonly updateByIdServiceUseCase: UpdateByIdServiceUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idService);
    const newService = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedService = await this.updateByIdServiceUseCase.run(id, newService);

      if (updatedService) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idService: updatedService.idService,
            name: updatedService.name,
            description: updatedService.description,
            image: updatedService.image,
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
