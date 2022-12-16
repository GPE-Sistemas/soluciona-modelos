export interface IProducto {
  _id?: string;
  nombre?: string;
  marca?: string;
  segmento?: string;
  claseToxicologica?: string;
  unidad?: string;
  dosisPorHectarea?: number; // en unidad por hectarea
}
