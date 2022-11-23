import { IDatosPersonales } from "./datosPersonales";

export interface ICreateUsuario {
  username: string;
  password?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
}
