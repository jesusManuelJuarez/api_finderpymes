import express from "express";
import { planRouter } from "./plan/infrastructure/PlanRouter";
import { resourceRouter } from "./resource/infrastructure/ResourceRouter";
import { serviceRouter } from "./service/infrastructure/ServiceRouter";
import { Signale } from "signale";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';


const app = express();



const signale = new Signale();

app.use(express.json());
const swaggerDocument = YAML.load('swagger.yaml');


// Rutas para los recursos de data fiscal, source y address
app.use("/plan", planRouter);
app.use("/resource", resourceRouter);
app.use("/service", serviceRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
  signale.success("[Application] Server online on port 3000");
});

