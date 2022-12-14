import { INivel } from "../rolUsuario";

export interface ICreateRol {
  nombre?: string;
  variante?: string;
  nivel?: INivel;
  idsPerfiles?: string[];
}
