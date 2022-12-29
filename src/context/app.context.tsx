import * as React from "react";
import { IProductContext } from "../interfaces/products.context";
import { IProductList } from "../interfaces/user";

export const ProductContext = React.createContext<IProductContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = React.useState<IProductList[]>([]);

  const saveProduct = (product: IProductList) => {
    const newTodo: IProductList = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
    };
    setProducts([...products, newTodo]);
  };

  const deleteProduct = (product: IProductList) => {
    const newData = [...products];
    const prevIndex = products.findIndex((item) => item.id === product.id);
    newData.splice(prevIndex, 1);
    setProducts(newData);
  };

  const updateProducts = (newProducts: IProductList[]) => {
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider
      value={{ products, saveProduct, deleteProduct, updateProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
