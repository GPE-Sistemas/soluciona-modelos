import { IUbicacion } from "../../compartidos";
import { IEmpresaProductora } from "../empresaProductora";
import { IMunicipio } from "../municipio";

export interface IEstablecimiento {
  _id?: string;
  nombre?: string;
  idEmpresaProductora?: string;
  idMunicipio?: string;
  aprobado?: boolean;
  ubicacion?: IUbicacion[];
  // Populate
  empresaProductora?: IEmpresaProductora;
  municipio?: IMunicipio;
}
