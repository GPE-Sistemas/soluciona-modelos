import { IRol } from "../rol/schema";
import { IUsuario } from "../usuario";
import { INivel } from "../../compartidos/niveles";
import { IMunicipio } from "../municipio";
import { IEmpresaProductora } from "../empresaProductora";
import { IEstablecimiento } from "../establecimiento";
import { IEmpresaAplicadora } from "../empresaAplicadora";

export interface IRolUsuario {
  _id?: string;
  email?: string;
  nivel?: INivel;
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idEmpresaAplicadora?: string;
  idRol?: string;
  // Populate
  usuario?: IUsuario;
  municipio?: IMunicipio;
  empresaProductora?: IEmpresaProductora;
  establecimiento?: IEstablecimiento;
  empresaAplicadora?: IEmpresaAplicadora;
  rol?: IRol;
}
