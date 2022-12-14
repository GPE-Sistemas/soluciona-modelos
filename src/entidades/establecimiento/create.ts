import { IUbicacion } from "../../compartidos";

export interface ICreateEstablecimiento {
  nombre?: string;
  idEmpresaProductora?: string;
  idMunicipio?: string;
  aprobado?: boolean;
  ubicacion?: IUbicacion[];
}
