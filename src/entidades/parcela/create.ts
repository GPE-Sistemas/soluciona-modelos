import { ICoordenadas, IPoligono } from "../../compartidos";

export interface ICreateParcela {
  idMunicipio?: string;
  clasesToxicologicasPermitidas?: string[];
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
