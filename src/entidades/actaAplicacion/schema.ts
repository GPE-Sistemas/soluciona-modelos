import { IEmpresaAplicadora } from "../empresaAplicadora";
import { IEmpresaProductora } from "../empresaProductora";
import { IEstablecimiento } from "../establecimiento";
import { IIngenieroAgronomo } from "../ingenieroAgronomo";
import { ILote } from "../lote";
import { IMunicipio } from "../municipio";
import { ICondicionesMeteorologicas } from "./condicionesMeteorologicas";
import { ICondicionesOperativas } from "./condicionesOperativas";

export interface IActaAplicacion {
  _id?: string;

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
  fechaAplicacion?: string;
  horaInicio?: string;
  horaFin?: string;
  condicionesMeteorologicas?: ICondicionesMeteorologicas;
  condicionesOperativas?: ICondicionesOperativas;

  // Info de respuesta del municipio
  aprobadaPorMunicipio?: boolean;
  fechaRespuesta?: string;
  motivoRechazo?: string;
  emailRespuesta?: string;

  // Populate
  municipio?: IMunicipio;
  empresaProductora?: IEmpresaProductora;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  empresaAplicadora?: IEmpresaAplicadora;
  ingenieroAgronomo?: IIngenieroAgronomo;
}
