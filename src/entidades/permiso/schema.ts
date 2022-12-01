import { CaslAction, CaslSubject } from "../../compartidos";

export interface IPermiso {
  _id?: string;
  nombre?: string;
  accion?: CaslAction;
  entidad?: CaslSubject;
  campos?: string[];
  condiciones?: object;
}
