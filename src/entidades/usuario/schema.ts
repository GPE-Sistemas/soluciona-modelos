import { IRol } from "../rol";
import { IDatosPersonales } from "./datosPersonales";

export type INivel = "Municipio" | "Productor" | "Establecimiento" | "Lote";

export interface IUsuario {
  _id?: string;
  activo?: boolean;
  fechaCreacion?: string;
  username?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  superadmin?: boolean;
  roles?: {
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
  }[];
}
