import { INivel } from "../rolUsuario";
import { ICondicionesMeteorologicas } from "./condicionesMeteorologicas";
import { ICondicionesOperativas } from "./condicionesOperativas";
import { IEstacionMeteorologica } from "./estacionMeteorologica";

export interface ICreateActaAplicacion {
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  idIngenieroAgronomo?: string;

  // Info de carga
  idSolicitudAplicacion?: string;
  fechaCreacion?: string;
  emailCreacion?: string;
  creadoPorNivel?: INivel;
  fechaAplicacion?: string;
  horaInicio?: string;
  horaFin?: string;
  condicionesMeteorologicas?: ICondicionesMeteorologicas;
  estacionMeteorologica?: IEstacionMeteorologica;
  condicionesMeteorologicasEstacion?: ICondicionesMeteorologicas;
  condicionesOperativas?: ICondicionesOperativas;

  // para que el municipio pueda verla y aprobarla
  aprobadaPorEmpresaProductora?: boolean;
  aprobadaPorEmpresaAplicadora?: boolean;
  aprobadaPorIngenieroAgronomo?: boolean;
}
