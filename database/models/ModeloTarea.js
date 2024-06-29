import { Schema, model} from "mongoose";

const schemaTarea = new Schema({
    id: { type: Number, unique: true },
    asunto: String,
    estado: String,
    fechaEntrega: String,
    usuario: String,
    prioridad: String,
    descripcion: String,
    equipo: String
});

export const ModeloTarea = model("Tarea", schemaTarea)