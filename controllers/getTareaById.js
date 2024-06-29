import { ModeloTarea } from "../database/models/ModeloTarea.js";
export const getTareaById = (req, res, next) => {
    const idTarea = req.params.id;

    ModeloTarea.findOne({id:idTarea})
    .then((data) => {
        if (!data) {
            throw new Error(`No existe ninguna tarea con el Id ${idTarea}`);
        } else {
            res.json(data);
        }
    })
    .catch((error) => {
        next(error)
    });
}