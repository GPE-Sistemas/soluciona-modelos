import { IRol } from "../rol";
import { IDatosPersonales } from "./datosPersonales";

export interface IUsuario {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  username: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  superadmin?: boolean;
  roles: {
    idsEstablecimientos?: string[];
    idsLotes?: string[];
    idRol: string;
    // Populate
    establecimientos?: any[]; // IEstablecimiento[];
    lotes?: any[]; // ILote[];
    rol?: IRol;
  }[];
}
