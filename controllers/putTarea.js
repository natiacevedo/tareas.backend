import { ModeloTarea } from "../database/models/ModeloTarea.js";

export const putTarea = async (req, res, next) => {
    const idTarea = req.params.id;
    const {asunto, prioridad, equipo, estado, usuario, descripcion, fechaEntrega} = req.body;

    const datosNuevos = {};
    if(asunto) datosNuevos.asunto = asunto;
    if(prioridad) datosNuevos.prioridad = prioridad;
    if(equipo) datosNuevos.equipo = equipo;
    if(estado) datosNuevos.estado = estado;
    if(usuario) datosNuevos.usuario = usuario;
    if(descripcion) datosNuevos.descripcion = descripcion;
    if(fechaEntrega) datosNuevos.fechaEntrega = fechaEntrega;

    ModeloTarea.updateOne({id:idTarea}, datosNuevos)
    .then((data) => {
        if (data.matchedCount === 0) {
            throw new Error(`No existe ninguna tarea con el id ${idTarea}`);
        }
        res.json({
            message: `Tarea con id ${idTarea} modificada con exito`,
        });
    })
    .catch((error) => {
        next(error);
    });
}