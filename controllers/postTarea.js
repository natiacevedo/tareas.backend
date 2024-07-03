import { ModeloTarea } from "../database/models/ModeloTarea.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postTarea = async (req, res, next) => {
    const {asunto, equipo, usuario, fechaEntrega, prioridad, descripcion, estado} = req.body;

    const nuevaTarea = new ModeloTarea();
    nuevaTarea.id = await obtenerProximoId(ModeloTarea);
    nuevaTarea.asunto = asunto;
    nuevaTarea.equipo = equipo;
    nuevaTarea.usuario = usuario;
    nuevaTarea.fechaEntrega = fechaEntrega;
    nuevaTarea.prioridad = prioridad;
    nuevaTarea.descripcion = descripcion;
    nuevaTarea.estado = estado;

    nuevaTarea.usuarioLogueado = req.usuario.id;

    nuevaTarea.save()
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        next(error);
    })
}