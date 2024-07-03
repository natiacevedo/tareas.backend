import { Schema, model} from "mongoose";

const schemaTarea = new Schema({
    id: { type: Number, unique: true },
    asunto: String,
    equipo: String,
    usuario: String,
    fechaEntrega: String,
    prioridad: String,
    descripcion: String,
    estado: String,
    usuarioLogueado: String
});

export const ModeloTarea = model("Tarea", schemaTarea)