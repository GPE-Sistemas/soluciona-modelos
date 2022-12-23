import { ICoordenadas, IPoligono } from "../../compartidos";
import { IMunicipio } from "../municipio";

export interface IZonaExclusion {
  _id?: string;
  idMunicipio?: string;
  nombre?: string;
  clasesToxicologicasProhibidas?: string[];
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
  // Virtuals
  municipio?: IMunicipio;
}
