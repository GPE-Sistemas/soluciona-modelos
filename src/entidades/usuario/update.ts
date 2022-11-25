import { IDatosPersonales } from "./datosPersonales";

export interface IUpdateUsuario {
  emailVerificado?: boolean;
  tokenVerificacion?: string;
  fechaCreacion?: string;
  fechaVerificacion?: string;
  username?: string;
  email?: string;
  password?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
}
