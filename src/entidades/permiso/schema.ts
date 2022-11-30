export type CaslAction = "manage" | "create" | "read" | "update" | "delete";

export const caslActions: CaslAction[] = [
  "manage",
  "create",
  "read",
  "update",
  "delete",
];

export type CaslSubject =
  | "all"
  | "Usuario"
  | "Perfil"
  | "Rol"
  | "Permiso"
  | "RolUsuario"
  | "Municipio"
  | "Productor"
  | "Establecimiento"
  | "Lote"
  | "Aplicador"
  | "OperarioAplicador"
  | "Maquinaria"
  | "SolicitudAplicacion"
  | "AprobacionSolicitudAplicacion"
  | "ActaAplicacion"
  | "AprobacionActaAplicacion";

export const caslSubjects: CaslSubject[] = [
  "all",
  "Usuario",
  "Perfil",
  "Rol",
  "Permiso",
  "RolUsuario",
  "Municipio",
  "Productor",
  "Establecimiento",
  "Lote",
  "Aplicador",
  "OperarioAplicador",
  "Maquinaria",
  "SolicitudAplicacion",
  "AprobacionSolicitudAplicacion",
  "ActaAplicacion",
  "AprobacionActaAplicacion",
];

export interface IPermiso {
  _id?: string;
  nombre?: string;
  accion?: CaslAction;
  entidad?: CaslSubject;
  campos?: string[];
  condiciones?: object;
}
