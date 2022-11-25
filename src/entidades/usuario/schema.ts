import { IDatosPersonales } from "./datosPersonales";

export interface IUsuario {
  _id?: string;
  emailVerificado?: boolean;
  tokenVerificacion?: string;
  fechaCreacion?: string;
  fechaVerificacion?: string;
  username?: string;
  email?: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
  superadmin?: boolean;
}
