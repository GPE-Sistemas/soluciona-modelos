import { ICoordenadas, IPoligono } from "../../compartidos";

export interface IUpdateParcela {
  idMunicipio?: string;
  partidaInmobiliaria?: string;
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
