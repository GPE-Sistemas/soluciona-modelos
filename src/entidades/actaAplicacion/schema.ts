export interface IActaAplicacion {
  _id?: string;
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  idSolicitudAplicacion?: string;
  //
  fecha?: string;
  emailResponsable?: string;
  fechaAplicacion?: string;
  horaInicio?: string;
  horaFin?: string;
  condicionesMeteorologicas?: any; // ICondicionesMeteorologicas
  condicionesOperativas?: any; // ICondicionesOperativas
}
