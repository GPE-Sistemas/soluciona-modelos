import { IRol } from "../rol";

export interface IMunicipio {
  _id?: string;
  nombre?: string;
  emailResponsable?: string;
  idsRoles?: string[];
  // Populate
  roles?: IRol[];
}
