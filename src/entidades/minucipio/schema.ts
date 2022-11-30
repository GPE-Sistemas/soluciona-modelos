import { IRol } from "../rol";

export interface IMunicipio {
  _id?: string;
  nombre?: string;
  idsRoles?: IRol[];
  // Populate
  roles?: IRol[];
}
