import { IEmpresaAplicadora } from "../empresaAplicadora";

export interface IOperarioAplicador {
  _id?: string;
  idEmpresaAplicadora?: string;
  email?: string;
  carnet?: string;
  vigenciaCarnet?: string;

  // Populate
  empresaAplicadora?: IEmpresaAplicadora;
}
