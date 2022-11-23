import { IRol } from "../rol";
import { IDatosPersonales } from "./datosPersonales";

export interface IUsuario {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  username: string;
  hash?: string;
  roles: IRol[];
  datosPersonales?: IDatosPersonales;
}
