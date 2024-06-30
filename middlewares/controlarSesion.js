import { ModeloUsuario } from "../database/models/ModeloUsuario.js";

export const controlarSesion = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader) {
            throw {
                statusCode: 401,
                message: "No autorizado - No se envió token de sesión",
            };
        }
        const usuario = await ModeloUsuario.findOne({ 
            session: authHeader 
        });

        if (usuario) {
            req.usuario = usuario;
            next();
        } else {
            throw {
                statusCode: 401,
                message: "No autorizado - sesión no válida",
            };
        }
    } catch (error) {
        next(error);
    }
};