import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { conectarDB } from "./database/conexion.js";
import { getTareas } from "./controllers/getTareas.js";
import { getTareaById } from "./controllers/getTareaById.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { postTarea } from './controllers/postTarea.js';
import { putTarea } from './controllers/putTarea.js';
import { deleteTarea } from './controllers/deleteTarea.js';
import { postUsuario } from './controllers/postUsuario.js';
import { loginUsuario } from './controllers/loginUsuario.js';
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { logoutUsuario } from './controllers/logoutUsuario.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
await conectarDB();

app.use(mostrarDatosRequest);
app.get('/', (req, res) => {
    res.send('ApiTareas');
});

app.post('/registrar', postUsuario)
app.post('/login', loginUsuario)

app.use(controlarSesion);

app.post('/logout', logoutUsuario)
app.get('/tareas', getTareas);
app.get('/tarea/:id', getTareaById);
app.post('/tarea', postTarea)
app.put('/tarea/:id', putTarea)
app.delete('/tarea/:id', deleteTarea)

app.use(manejadorErrores);

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});