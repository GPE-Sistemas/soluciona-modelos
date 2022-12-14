import { CaslAction, CaslSubject } from "../../compartidos";

export interface ICreatePermiso {
  nombre?: string;
  accion?: CaslAction;
  entidad?: CaslSubject;
  campos?: string[];
  condiciones?: object;
}
