import { AppDataSurce } from "../confing/db";
import { Carrera } from "../entities/carrera.entity";

//Crear el repositorio
const CarreraRepository = AppDataSurce.getRepository(Carrera);

// crear un crud uwu didi te odio

// Leer todas las carreras

export const srvGetCarreras = async ()=> {
const carreras= await CarreraRepository.find({
    order: {nombreCarrera: 'ASC'}
});

return carreras;
}
export const srvCreateCarreras = async (nombreCarrera:String)=>{
    const nuevaCarrera = new Carrera ();

    nuevaCarrera.nombreCarrera= nombreCarrera;
 return await CarreraRepository.save(nuevaCarrera);
}

//obtemer ia carrera

export const srvGetCarreraById = async (pIdCarrera: number)=> {
const carrera= await CarreraRepository.findOne({
where: {idCarrera: pIdCarrera}
})
return carrera;
}
//actualizar carrera
export const srvUpdateCarrera = async (pIdCarrera :number,pNombreCarrera: String)=> {
    //Buscar la carrera
const Carrera = await CarreraRepository.findOne({
    where:{idCarrera: pIdCarrera}
});

if(!Carrera)return null;
Carrera.nombreCarrera = pNombreCarrera;
return await CarreraRepository.save(Carrera);

}
//eliminar carrera

export const srvDeleteCarrera = async (pIdCarrera :number)=>{
   const Carrera = await CarreraRepository.findOne({
    where:{idCarrera: pIdCarrera}
   }) ;
   
if(!Carrera)return null;

return await CarreraRepository.remove(Carrera);
}

