import { IPerfil } from "../perfil";

export interface IRol {
  _id?: string;
  nombre?: string;
  idMunicipio?: string;
  idsPerfiles?: string[];
  // Populate
  municipio?: any; // IMunicipio;
  perfiles?: IPerfil[];
}
