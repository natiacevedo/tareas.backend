import { ModeloTarea } from "../database/models/ModeloTarea.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postTarea = async (req, res, next) => {
    const {asunto, prioridad, equipo, estado, usuario, descripcion, fechaEntrega} = req.body;

    const nuevaTarea = new ModeloTarea();
    nuevaTarea.id = await obtenerProximoId(ModeloTarea);
    nuevaTarea.asunto = asunto;
    nuevaTarea.prioridad = prioridad;
    nuevaTarea.equipo = equipo;
    nuevaTarea.estado = estado;
    nuevaTarea.usuario = usuario;
    nuevaTarea.descripcion = descripcion;
    nuevaTarea.fechaEntrega = fechaEntrega;

    nuevaTarea.save()
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        next(error);
    })
}