import { ICoordenadas } from "./coordenadas";

export type IPoligono = ICoordenadas[];

export interface IUbicacion {
  partidaInmobiliaria?: string;
  propio?: boolean;
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
