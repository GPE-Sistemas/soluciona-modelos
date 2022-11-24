import { IDatosPersonales } from "./datosPersonales";

export interface IUsuario {
  _id?: string;
  activo?: boolean;
  fechaCreacion?: string;
  username?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  superadmin?: boolean;
}
