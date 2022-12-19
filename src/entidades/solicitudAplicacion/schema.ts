import { IEmpresaAplicadora } from "../empresaAplicadora";
import { IEmpresaProductora } from "../empresaProductora";
import { IEstablecimiento } from "../establecimiento";
import { IIngenieroAgronomo } from "../ingenieroAgronomo";
import { ILote } from "../lote";
import { IMunicipio } from "../municipio";
import { INivel } from "../rolUsuario";
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
  creadoPorNivel?: INivel;
  fechaTentativaAplicacion?: string;
  recetaAgronomica?: IRecetaAgronomica;

  // Info de aprobacion
  // Se inicializa en true dependiendo del rol del usuario
  // Ej si es creado por un usuario de empresa productora,
  // se inicializa en true aprobadaPorEmpresaProductora y en false los demas
  // luego la empresa aplicadora y el ingeniero agronomo deben aprobarla,
  // para que el municipio pueda verla y aprobarla
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
}
