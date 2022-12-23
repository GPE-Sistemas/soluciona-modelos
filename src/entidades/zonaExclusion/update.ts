import { ICoordenadas, IPoligono } from "../../compartidos";

export interface IUpdateZonaExclusion {
  idMunicipio?: string;
  clasesToxicologicasPermitidas?: string[];
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
