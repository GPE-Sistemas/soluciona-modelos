import { IDatosPersonales } from "./datosPersonales";

export interface ICreateUsuario {
  email?: string;
  tokenVerificacion?: string;
  emailVerificado?: boolean;
  fechaVerificacion?: string;
  datosPersonales?: IDatosPersonales;
}
