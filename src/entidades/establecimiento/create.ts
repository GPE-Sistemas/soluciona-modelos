import { IUbicacion } from "../../compartidos";

export interface ICreateEstablecimiento {
  nombre?: string;
  idEmpresaProductora?: string;
  idMunicipio?: string;
  aprobado?: boolean;
  propio?: boolean;
  ubicacion?: IUbicacion[];
}
