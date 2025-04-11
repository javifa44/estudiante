import { Router } from "express";   


const router = Router();

import { getEstudiante,getEstudiantes,  createEstudiante, updateEstudiante, deleteEstudiante } from "../Estudiante.controllers"; 

router.get('/', getEstudiantes);
router.get('/:id', getEstudiante);
router.post('/', createEstudiante);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);

export default router;