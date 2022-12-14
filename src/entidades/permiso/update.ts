import { CaslAction, CaslSubject } from "../../compartidos";

export interface IUpdatePermiso {
  nombre?: string;
  accion?: CaslAction;
  entidad?: CaslSubject;
  campos?: string[];
  condiciones?: object;
}
