import { IRol } from "../rol/schema";
import { IUsuario } from "../usuario";
import { INivel } from "./niveles";

export interface IRolUsuario {
  _id?: string;
  email?: string;
  nivel?: INivel;
  idMunicipio?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idAplicador?: string;
  idRol?: string;
  // Populate
  usuario?: IUsuario;
  municipio?: any; // IMunicipio;
  productor?: any; // IProductor;
  establecimiento?: any; // IEstablecimiento;
  aplicador?: any; // IAplicador;
  rol?: IRol;
}
