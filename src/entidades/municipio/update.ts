import { IConfigMunicipio } from "./config";

export interface IUpdateMunicipio {
  nombre?: string;
  emailResponsable?: string;
  idsRoles?: string[];
  config?: IConfigMunicipio;
}
