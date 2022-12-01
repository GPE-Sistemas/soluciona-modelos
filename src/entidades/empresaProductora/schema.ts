import { IMunicipio } from "../municipio";

export interface IEmpresaProductora {
  _id?: string;
  nombre?: string;
  idMunicipio?: string;
  aprobada?: boolean;
  emailResponsable?: string;
  // Populate
  municipio?: IMunicipio;
}
