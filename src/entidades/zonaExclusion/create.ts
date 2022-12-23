import { ICoordenadas, IPoligono } from "../../compartidos";

export interface ICreateZonaExclusion {
  idMunicipio?: string;
  nombre?: string;
  clasesToxicologicasProhibidas?: string[];
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
