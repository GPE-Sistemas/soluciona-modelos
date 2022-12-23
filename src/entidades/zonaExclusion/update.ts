import { ICoordenadas, IPoligono } from "../../compartidos";

export interface IUpdateZonaExclusion {
  idMunicipio?: string;
  nombre?: string;
  clasesToxicologicasProhibidas?: string[];
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
