import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { conectarDB } from "./database/conexion.js";
import { getTareas } from "./controllers/getTareas.js";
import { getTareaById } from "./controllers/getTareaById.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { postTarea } from './controllers/postTarea.js';

const app = express();
const port = 3000;
app.use(express.json());
await conectarDB();

app.use(mostrarDatosRequest);
app.get('/', (req, res) => {
    res.send('ApiTareas');
});

app.get('/tareas', getTareas);
app.get('/tarea/:id', getTareaById);
app.post('/tarea', postTarea)

app.use(manejadorErrores);

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});