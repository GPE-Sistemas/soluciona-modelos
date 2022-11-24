import { IRol } from "../rol";
import { INivel } from "./niveles";

export interface IRolUsuario {
  nivel?: INivel;
  idMunicipio?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idRol?: string;
  // Populate
  municipio?: any; // IMunicipio;
  productor?: any; // IProductor;
  establecimiento?: any; // IEstablecimiento;
  lote?: any; // ILote;
  rol?: IRol;
}
