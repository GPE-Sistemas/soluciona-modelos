import { IEmpresaAplicadora } from "../empresaAplicadora";
import { IEmpresaProductora } from "../empresaProductora";
import { IEstablecimiento } from "../establecimiento";
import { IIngenieroAgronomo } from "../ingenieroAgronomo";
import { ILote } from "../lote";
import { IMaquinaria } from "../maquinaria";
import { IMunicipio } from "../municipio";
import { IOperadorMaquinaria } from "../operadorMaquinaria";
import { INivel } from "../rolUsuario";
import { ISolicitudAplicacion } from "../solicitudAplicacion";
import { ICondicionesMeteorologicas } from "./condicionesMeteorologicas";
import { ICondicionesOperativas } from "./condicionesOperativas";
import { IEstacionMeteorologica } from "./estacionMeteorologica";

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
  idMaquinaria?: string;
  idOperadorMaquinaria?: string;

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

  // Info de aprobacion
  aprobadaPorEmpresaProductora?: boolean;
  fechaRespuestaProductora?: string;
  motivoRechazoProductora?: string;
  emailRespuestaProductora?: string;

  aprobadaPorEmpresaAplicadora?: boolean;
  fechaRespuestaAplicadora?: string;
  motivoRechazoAplicadora?: string;
  emailRespuestaAplicadora?: string;

  aprobadaPorIngenieroAgronomo?: boolean;
  fechaRespuestaIngeniero?: string;
  motivoRechazoIngeniero?: string;
  emailRespuestaIngeniero?: string;

  // Info de respuesta del municipio
  aprobadaPorMunicipio?: boolean;
  fechaRespuestaMunicipio?: string;
  motivoRechazoMunicipio?: string;
  emailRespuestaMunicipio?: string;

  // Populate
  municipio?: IMunicipio;
  empresaProductora?: IEmpresaProductora;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  empresaAplicadora?: IEmpresaAplicadora;
  ingenieroAgronomo?: IIngenieroAgronomo;

  solicitudAplicacion?: ISolicitudAplicacion;
  maquinaria?: IMaquinaria;
  operadorMaquinaria?: IOperadorMaquinaria;
}
