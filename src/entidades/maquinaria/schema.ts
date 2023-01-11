import { ICoordenadas } from "../../compartidos";

export interface IMaquinaria {
  _id?: string;
  idEmpresaProductora?: string;
  tipo?: string;
  marca?: string;
  modelo?: string;
  patente?: string;
  fotosEmpresa?: string[];
  fotosMunicipio?: string[];
  lugarGuardado?: ICoordenadas;
}
