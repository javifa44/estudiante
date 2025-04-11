import {Router} from 'express';

const router= Router();

import { getCarreras,getCarrera,createCarrera,updateCarrera,deleteCarrera } from '../Carrera.controllers';


router.get('/', getCarreras);
router.get('/:id',getCarrera);
router.post('/', createCarrera);
router.put(':id', updateCarrera);
router.delete('/:id',deleteCarrera);

export default router;




