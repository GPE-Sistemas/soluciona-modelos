import { IPerfil } from "../perfil";

export interface IRol {
  _id?: string;
  nombre?: string;
  idsPerfiles?: string[];
  // Populate
  perfiles?: IPerfil[];
}
