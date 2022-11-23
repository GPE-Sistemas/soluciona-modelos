import { IUsuario, IPermiso, IPerfil, IRol } from "./";

const user: IUsuario = {
  _id: "U1",
  activo: true,
  fechaCreacion: "2020-04-20T00:00:00.000Z",
  username: "admin",
  hash: "5e9c1c1c1c1c1c1c1c1c1c1c",
  superadmin: false,
  roles: [
    {
      idRol: "R1 = Administrador Productor",
      idsEstablecimientos: ["E1"],
      idsLotes: ["L1"],
    },
  ],
};

const rolAdministradorProductor: IRol = {
  _id: "R1",
  nombre: "Administrador Productor",
  idMunicipio: "M1",
  idsPerfiles: ["PF1 = Crear Usuario", "PF2 = Crear Solicitud de Aplicacion"],
};

const perfilCrearUsuarios: IPerfil = {
  _id: "PF1",
  nombre: "Crear Usuarios",
  idsPermisos: ["PM1 = Crear Usuario", "PM2 = Leer Roles"],
};

const perfilCrearSolicitud: IPerfil = {
  _id: "PF2",
  nombre: "Crear Solicitud de Aplicacion",
  idsPermisos: [
    "PM3 = Leer Lotes",
    "PM4 = Leer Empresas Aplicadoras",
    "PM5 = Crear Solicitud de Aplicacion",
  ],
};

const permisoCrearUsuario: IPermiso = {
  _id: "PM1",
  nombre: "Crear Usuario",
  accion: "create",
  entidad: "Usuario",
  campos: [],
  condiciones: {
    $or: [
      { "user.superadmin": true },
      {
        "idsRoles.idsPerfiles.idsPermisos": {
          $in: "user.roles.rol.perfiles.idsPermisos",
        },
      },
    ],
  },
};
