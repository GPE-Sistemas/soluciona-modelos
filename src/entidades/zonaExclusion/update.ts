import { ICoordenadas, IPoligono } from "../../compartidos";

export interface IUpdateZonaExclusion {
  idMunicipio?: string;
  clasesToxicologicasProhibidas?: string[];
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
