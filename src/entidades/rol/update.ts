import { INivel } from "../rolUsuario";

export interface IUpdateRol {
  nombre?: string;
  variante?: string;
  nivel?: INivel;
  idsPerfiles?: string[];
}
