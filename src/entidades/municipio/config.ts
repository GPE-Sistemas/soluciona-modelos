export interface IConfigMunicipio {
  solicitudRequiereAprobacionProductor?: boolean;
  solicitudRequiereAprobacionAplicador?: boolean;
  solicitudRequiereAprobacionIngeniero?: boolean;

  actaRequiereAprobacionProductor?: boolean;
  actaRequiereAprobacionAplicador?: boolean;
  actaRequiereAprobacionIngeniero?: boolean;

  tiempoParaModificarRespuestaSolicitud?: number;
  tiempoParaModificarRespuestaActa?: number;
}
