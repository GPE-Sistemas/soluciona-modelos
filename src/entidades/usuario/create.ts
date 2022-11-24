import { IDatosPersonales } from "./datosPersonales";
import { IRolUsuario } from "./rolUsuario";

export interface ICreateUsuario {
  username: string;
  password?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  roles?: IRolUsuario[];
}
