import { IRol } from "../rol";
import { IConfigMunicipio } from "./config";

export interface IMunicipio {
  _id?: string;
  nombre?: string;
  emailResponsable?: string;
  idsRoles?: string[];
  config?: IConfigMunicipio;
  // Populate
  roles?: IRol[];
}
