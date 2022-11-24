import { IDatosPersonales } from "./datosPersonales";

export interface ICreateUsuario {
  email?: string;
  username?: string;
  password?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
}
