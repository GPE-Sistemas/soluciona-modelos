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
  idLote?: string;
  idRol?: string;
  // Populate
  usuario?: IUsuario;
  municipio?: any; // IMunicipio;
  productor?: any; // IProductor;
  establecimiento?: any; // IEstablecimiento;
  lote?: any; // ILote;
  rol?: IRol;
}
