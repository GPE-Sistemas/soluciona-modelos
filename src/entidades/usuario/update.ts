import { IDatosPersonales } from "./datosPersonales";
import { IRolUsuario } from "./rolUsuario";

export interface IUpdateUsuario {
  activo?: boolean;
  username?: string;
  password?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  roles?: IRolUsuario[];
}
