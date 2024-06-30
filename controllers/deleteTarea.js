import { ModeloTarea } from "../database/models/ModeloTarea.js";

export const deleteTarea = (req, res, next) => {
    const idTarea = req.params.id;
    ModeloTarea.deleteOne({ id: idTarea })
        .then((data) => {
            if (data.deletedCount !== 1) {
                throw new Error(`No existe ninguna tarea con el id ${idTarea}`);
            } else {
                res.json({
                    message: `Tarea con id ${idTarea} eliminada con exito`,
                });
            }
        })
        .catch((error) => {
            next(error);
        });
}