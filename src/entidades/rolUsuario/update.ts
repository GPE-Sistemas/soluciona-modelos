import { INivel } from "../../compartidos/niveles";

export interface IUpdateRolUsuario {
  email?: string;
  nivel?: INivel;
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idEmpresaAplicadora?: string;
  idRol?: string;
}
