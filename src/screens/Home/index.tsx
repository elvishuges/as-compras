import React from "react";
import { ListRenderItem } from "react-native";
import { ProductList } from "../../components/ProductList";
import { ProductsOverViewCard } from "../../components/ProductsOverView";
import { ProductContext } from "../../context/app.context";
import { IProductContext } from "../../interfaces/products.context";
import { IProductList } from "../../interfaces/user";

import { Container } from "./styles";

export const Home = () => {
  const { products } = React.useContext(ProductContext) as IProductContext;
  const total = products.reduce((acc, productItem) => {
    return acc + productItem.price;
  }, 0);

  return (
    <Container>
      <ProductsOverViewCard productsTotalPrice={total} />
      <ProductList productList={products} />
    </Container>
  );
};
