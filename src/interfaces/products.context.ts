import { IProductList } from "./user";

export type IProductContext = {
  products: IProductList[];
  saveProduct: (product: IProductList) => void;
  deleteProduct: (product: IProductList) => void;
  updateProducts: (newProducts: IProductList[]) => void;
};
