import { ICoordenadas } from "./coordenadas";

export type IPoligono = ICoordenadas[];

export interface IUbicacion {
  poligono: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
