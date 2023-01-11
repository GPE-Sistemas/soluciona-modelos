import { ICoordenadas } from "../../compartidos";

export interface ICreateMaquinaria {
  idEmpresaProductora?: string;
  tipo?: string;
  marca?: string;
  modelo?: string;
  patente?: string;
  fotosEmpresa?: string[];
  fotosMunicipio?: string[];
  lugarGuardado?: ICoordenadas;
}
