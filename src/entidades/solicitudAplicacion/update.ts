import { INivel } from "../rolUsuario";
import { IRecetaAgronomica } from "./recetaAgronomica";

export interface IUpdateSolicitudAplicacion {
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  idIngenieroAgronomo?: string;

  // Info de carga
  fechaCreacion?: string;
  emailCreacion?: string;
  creadoPorNivel?: INivel;
  fechaTentativaAplicacion?: string;
  recetaAgronomica?: IRecetaAgronomica;

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
