import { INivel } from "../rolUsuario";
import { ICondicionesMeteorologicas } from "./condicionesMeteorologicas";
import { ICondicionesOperativas } from "./condicionesOperativas";
import { IEstacionMeteorologica } from "./estacionMeteorologica";

export interface IUpdateActaAplicacion {
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
}
