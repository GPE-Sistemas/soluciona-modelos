import { ICoordenadas, IPoligono } from "../../compartidos";

export interface ICreateZonaExclusion {
  idMunicipio?: string;
  partidaInmobiliaria?: string;
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
