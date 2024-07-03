import { ModeloTarea } from "../database/models/ModeloTarea.js";
import { formatearFiltrosDB } from "../utils/functions.js";

export const getTareas = (req, res, next) => {
    const filtroAsunto = formatearFiltrosDB(req.query.asunto)
    const filtroPrioridad = formatearFiltrosDB(req.query.prioridad)
    const filtroEquipo = formatearFiltrosDB(req.query.equipo)
    const filtroEstado = formatearFiltrosDB(req.query.estado)
    const filtroUsuario = formatearFiltrosDB(req.query.usuario)
    
    
    const filtros = {usuarioLogueado: req.usuario.id}
    if(filtroAsunto) filtros.asunto = filtroAsunto
    if(filtroPrioridad) filtros.prioridad = filtroPrioridad
    if(filtroEquipo) filtros.equipo = filtroEquipo
    if(filtroEstado) filtros.estado = filtroEstado
    if(filtroUsuario) filtros.usuario = filtroUsuario

    ModeloTarea.find(filtros)
    .then((data) => {
        console.log("get tareas =>", data)
        if (data.length === 0) {
            res.json([])
        }else {
            res.json(data)
        }
    })
    .catch((error) => {
        next(error)
    })
}