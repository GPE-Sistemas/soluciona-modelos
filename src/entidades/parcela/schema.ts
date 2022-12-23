import { ICoordenadas, IPoligono } from "../../compartidos";
import { IMunicipio } from "../municipio";

export interface IParcela {
  _id?: string;
  idMunicipio?: string;
  partidaInmobiliaria?: string;
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
  // Virtuals
  municipio?: IMunicipio;
}
