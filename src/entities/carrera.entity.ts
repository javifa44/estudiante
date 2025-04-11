import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity({name : 'carrera'})
export class Carrera{
//definir todos los campos
@PrimaryGeneratedColumn({name :'id_carrera'})
idCarrera : number;


@Column({name : 'nombre_carrera', nullable:false})
nombreCarrera : String;

// id_carrera, nombre_carrera




}