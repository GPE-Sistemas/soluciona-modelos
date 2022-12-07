import { IPerfil } from "../perfil";
import { INivel } from "../rolUsuario";

export interface IRol {
  _id?: string;
  nombre?: string;
  nivel?: INivel;
  idsPerfiles?: string[];
  // Populate
  perfiles?: IPerfil[];
}
