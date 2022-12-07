import { IMunicipio } from "../municipio";

export interface IEmpresaAplicadora {
  _id?: string;
  nombre?: string;
  cuil?: string;
  idsMunicipiosSolicitados?: string[];
  idsMunicipiosAprobados?: string[];
  emailResponsable?: string;
  // Populate
  municipiosSolicitados?: IMunicipio[];
  municipiosAprobados?: IMunicipio[];
}
