import { IConfigMunicipio } from "./config";

export interface ICreateMunicipio {
  nombre?: string;
  emailResponsable?: string;
  idsRoles?: string[];
  config?: IConfigMunicipio;
}
