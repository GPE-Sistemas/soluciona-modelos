import { IUbicacion } from "../../compartidos";

export interface IUpdateEstablecimiento {
  nombre?: string;
  idEmpresaProductora?: string;
  idMunicipio?: string;
  aprobado?: boolean;
  ubicacion?: IUbicacion[];
}
