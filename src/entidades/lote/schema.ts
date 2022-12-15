import { IUbicacion } from "../../compartidos";
import { IEmpresaProductora } from "../empresaProductora";
import { IEstablecimiento } from "../establecimiento";
import { IMunicipio } from "../municipio";

export interface ILote {
  _id?: string;
  nombre?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idMunicipio?: string;
  ubicacion?: IUbicacion;
  // Populate
  empresaProductora?: IEmpresaProductora;
  establecimiento?: IEstablecimiento;
  municipio?: IMunicipio;
}
