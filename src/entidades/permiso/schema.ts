export type CaslAction = "manage" | "create" | "read" | "update" | "delete";
export type CaslSubject = "all" | "Usuario" | "Perfil" | "Rol" | "Permiso";

export interface IPermiso {
  _id?: string;
  nombre?: string;
  accion?: CaslAction;
  entidad?: CaslSubject;
  campos?: string[];
  condiciones?: object;
}
