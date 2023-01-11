import { IEmpresaAplicadora } from "../empresaAplicadora";

export interface IOperadorMaquinaria {
  _id?: string;
  idEmpresaAplicadora?: string;
  email?: string;
  carnet?: string;
  vigenciaCarnet?: string;

  // Populate
  empresaAplicadora?: IEmpresaAplicadora;
}
