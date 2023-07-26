import { Request, Response } from "express";
import { UpdateByIdResourceUseCase } from "../../application/UpdateByIdResourceUseCase";

export class UpdateByIdResourceController {
  constructor(readonly updateByIdResourceUseCase: UpdateByIdResourceUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idResource);
    const newResource = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedResource = await this.updateByIdResourceUseCase.run(id, newResource);

      if (updatedResource) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idResource: updatedResource.idResource,
            type: updatedResource.type,
            image: updatedResource.image,
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
