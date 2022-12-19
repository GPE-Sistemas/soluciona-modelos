import { IEmpresaAplicadora } from "../empresaAplicadora";
import { IEmpresaProductora } from "../empresaProductora";
import { IEstablecimiento } from "../establecimiento";
import { IIngenieroAgronomo } from "../ingenieroAgronomo";
import { ILote } from "../lote";
import { IMunicipio } from "../municipio";
import { IRecetaAgronomica } from "./recetaAgronomica";

export interface ISolicitudAplicacion {
  _id?: string;

  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  idIngenieroAgronomo?: string;

  // Info de carga
  fechaCreacion?: string;
  emailCreacion?: string;
  fechaTentativaAplicacion?: string;
  recetaAgronomica?: IRecetaAgronomica;

  // Info de aprobacion
  // Se inicializa en true dependiendo del rol del usuario
  // Ej si es creado por un usuario de empresa productora,
  // se inicializa en true aprobadaPorEmpresaProductora y en false los demas
  // luego la empresa aplicadora y el ingeniero agronomo deben aprobarla,
  // para que el municipio pueda verla y aprobarla
  aprobadaPorEmpresaProductora?: boolean;
  aprobadaPorEmpresaAplicadora?: boolean;
  aprobadaPorIngenieroAgronomo?: boolean;

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
