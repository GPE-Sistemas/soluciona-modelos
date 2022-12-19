import { INivel } from "../rolUsuario";
import { IRecetaAgronomica } from "./recetaAgronomica";

export interface ICreateSolicitudAplicacion {
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

  // para que el municipio pueda verla y aprobarla
  aprobadaPorEmpresaProductora?: boolean;
  aprobadaPorEmpresaAplicadora?: boolean;
  aprobadaPorIngenieroAgronomo?: boolean;
}
