import { ICoordenadas } from "../../compartidos";

export interface ICreateMaquinaria {
  idEmpresaAplicadora?: string;
  tipo?: string;
  marca?: string;
  modelo?: string;
  patente?: string;
  fotosEmpresa?: string[];
  fotosMunicipio?: string[];
  lugarGuardado?: ICoordenadas;
}
