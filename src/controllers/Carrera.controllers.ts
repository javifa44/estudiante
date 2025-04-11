import { Request, Response } from "express";

import { 
    srvCreateCarreras,
    srvGetCarreraById,
    srvGetCarreras,
    srvDeleteCarrera
} from "../services/carrera.service";


// OBTENER TODAS LAS CARRERAS
export const getCarreras = async (req: Request, res: Response) => {

    try {
        const carreras = await srvGetCarreras();
        res.status(200).json(carreras)
    } catch (error) {
        console.log('Error al obtener las carreras' + error)
    }

}

// OBTENER UNA CARRERA POR ID
export const getCarrera = async(req: Request, res: Response) => {

    try {
        const { idCarrera } = req.params;
    
        const carrera = await srvGetCarreraById(+idCarrera);
    
        if(!carrera) res.status(404).json({ message: 'No se encontró la carrera con ID ' + idCarrera });
    
        res.status(200).json(carrera);
    
    } catch (error) {

        console.log('Error al obtener la carrera' + error)
    
    }

}

// CREAR UNA CARRERA
export const createCarrera = async (req: Request, res: Response) => {

    try {

        const { nombreCarrera } = req.body;

        const carrera = await srvCreateCarreras(nombreCarrera);

        res.status(201).json(carrera)

    } catch (error) {
        console.log('Error al crear la carrera' + error)
    }

}

// ACTUALIZAR UNA CARRERA
export const updateCarrera = async (req: Request, res: Response) => {

    const { id } = req.params; // const datos = req.params; // const id = datos.id;
    const { nombreCarrera } = req.body;

    try {
        const carrera = await srvGetCarreraById(+id);

        if(!carrera) res.status(404).json({ message: 'No se encontró la carrera con ID ' + id });

        const carreraUpdated = await srvCreateCarreras(nombreCarrera);

        res.status(200).json(carreraUpdated)

    }
    catch (error) {
        console.log('Error al actualizar la carrera' + error)
    }

}

// ELIMINAR UNA CARRERA
export const deleteCarrera = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const carrera = await srvGetCarreraById(+id);

        if(!carrera) res.status(404).json({ message: 'No se encontró la carrera con ID ' + id });

        // eliminar la carrera
        await srvDeleteCarrera(+id);

        res.status(200).json({ message: 'Carrera eliminada' })

    }
    catch (error) {
        console.log('Error al eliminar la carrera' + error)
    }

}