export interface ISolicitudAplicacion {
  _id?: string;
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  //
  fecha?: string;
  emailResponsable?: string;
  fechaTentativaAplicacion?: string;
  recetaAgronomica?: any; // IRecetaAgronomica
}
