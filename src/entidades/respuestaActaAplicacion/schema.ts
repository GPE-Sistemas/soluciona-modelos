export interface IRespuestaActaAplicacion {
  _id?: string;
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  idActaAplicacion?: string;
  //
  fecha?: string;
  aprobada?: boolean;
  motivoRechazo?: string;
  emailResponsable?: string;
}
