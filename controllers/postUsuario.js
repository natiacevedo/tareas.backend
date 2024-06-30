import { ModeloUsuario } from "../database/models/ModeloUsuario.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postUsuario = async (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    try {
        const usuarioExistente = await ModeloUsuario.findOne({email: email});

        if (usuarioExistente) {
            throw new Error("El email ya está en uso");
        }

        const nuevoUsuario = new ModeloUsuario();
        nuevoUsuario.id = await obtenerProximoId(ModeloUsuario);
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellido = apellido;
        nuevoUsuario.password = password;
        nuevoUsuario.email = email;

        nuevoUsuario
            .save()
            .then(() => {
                res.json({
                    message: `Nuevo usuario con id ${nuevoUsuario.id} creado con éxito.`,
                });
            })
            .catch((error) => {
                next(error);
            }); 

    } catch (error) {
        next(error);
    }
}