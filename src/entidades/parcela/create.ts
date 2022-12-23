import { ICoordenadas, IPoligono } from "../../compartidos";

export interface ICreateParcela {
  idMunicipio?: string;
  partidaInmobiliaria?: string;
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
