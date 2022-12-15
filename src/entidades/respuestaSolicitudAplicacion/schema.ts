export interface IRespuestaSolicitudAplicacion {
  _id?: string;
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  idIngenieroAgronomo?: string;
  idSolicitudAplicacion?: string;
  //
  fecha?: string;
  aprobada?: boolean;
  motivoRechazo?: string;
  emailResponsable?: string;
}
