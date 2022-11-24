import { IDatosPersonales } from "./datosPersonales";
import { IRolUsuario } from "./rolUsuario";

export interface IUsuario {
  _id?: string;
  activo?: boolean;
  fechaCreacion?: string;
  username?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  superadmin?: boolean;
  roles?: IRolUsuario[];
}
