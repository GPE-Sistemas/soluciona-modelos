import { IUbicacion } from "../../compartidos";
import { IEmpresaProductora } from "../empresaProductora";

export interface IEstablecimiento {
  _id?: string;
  nombre?: string;
  idEmpresaProductora?: string;
  partidaInmobiliaria?: string;
  propio?: boolean;
  ubicacion: IUbicacion;
  // Populate
  empresaProductora?: IEmpresaProductora;
}
