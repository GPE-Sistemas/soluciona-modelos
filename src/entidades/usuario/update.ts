import { IDatosPersonales } from "./datosPersonales";

export interface IUpdateUsuario {
  activo?: boolean;
  username?: string;
  password?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
}
