import { IUbicacion } from "../../compartidos";

export interface IUpdateLote {
  nombre?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idMunicipio?: string;
  ubicacion?: IUbicacion;
}
