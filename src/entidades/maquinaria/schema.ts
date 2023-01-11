import { ICoordenadas } from "../../compartidos";
import { IEmpresaAplicadora } from "../empresaAplicadora";

export interface IMaquinaria {
  _id?: string;
  idEmpresaAplicadora?: string;
  tipo?: string;
  marca?: string;
  modelo?: string;
  patente?: string;
  fotosEmpresa?: string[];
  fotosMunicipio?: string[];
  lugarGuardado?: ICoordenadas;

  // Populate
  empresaAplicadora?: IEmpresaAplicadora;
}
