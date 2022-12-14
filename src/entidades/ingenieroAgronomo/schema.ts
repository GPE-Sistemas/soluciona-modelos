import { IMunicipio } from "../municipio";

export interface IIngenieroAgronomo {
  _id?: string;
  nombre?: string;
  matricula?: string;
  idsMunicipiosSolicitados?: string[];
  idsMunicipiosAprobados?: string[];
  emailResponsable?: string;
  // Populate
  municipiosSolicitados?: IMunicipio[];
  municipiosAprobados?: IMunicipio[];
}
