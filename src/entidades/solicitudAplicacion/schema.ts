export interface ISolicitudAplicacion {
  _id?: string;
  idMunicipio?: string;
  idEmpresaProductora?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idEmpresaAplicadora?: string;
  emailResponsable?: string;
  fechaTentativa?: string;
  recetaAgronomica?: any; // IRecetaAgronomica
}
