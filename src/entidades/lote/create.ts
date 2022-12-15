import { IUbicacion } from "../../compartidos";

export interface ICreateLote {
  nombre?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idMunicipio?: string;
  ubicacion?: IUbicacion;
}
