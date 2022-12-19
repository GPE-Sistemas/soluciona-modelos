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
  aprobadaPorEmpresaAplicadora?: boolean;
  aprobadaPorIngenieroAgronomo?: boolean;

  // Info de respuesta del municipio
  aprobadaPorMunicipio?: boolean;
  fechaRespuesta?: string;
  motivoRechazo?: string;
  emailRespuesta?: string;
}
