import { IUbicacion } from "../../compartidos";
import { IEmpresaProductora } from "../empresaProductora";
import { IEstablecimiento } from "../establecimiento";

export interface ILote {
  _id?: string;
  nombre?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  ubicacion: IUbicacion;
  // Populate
  empresaProductora?: IEmpresaProductora;
  establecimiento?: IEstablecimiento;
}
