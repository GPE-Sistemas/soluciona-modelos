import { IProducto } from "../producto";

export interface IRecetaAgronomica {
  claseToxicologica?: string;
  receta: {
    idProducto?: string;
    dosis?: number;
    // Populate
    producto?: IProducto;
  }[];
}
