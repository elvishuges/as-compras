import React from "react";
import { ListRenderItem } from "react-native";
import { ProductList } from "../../components/ProductList";
import { ProductsOverViewCard } from "../../components/ProductsOverView";
import { IProductList } from "../../interfaces/user";

import { Container } from "./styles";
const products: IProductList = [
  {
    id: "1",
    name: "Feijão de Corda",
    brand: "Fradinho",
    price: 12,
  },
  {
    id: "2",
    name: "Leite de Texugo",
    brand: "Teixugueira",
    price: 20,
  },
  {
    id: "3",
    name: "Leite de Texugo",
    brand: "Teixugueira",
    price: 20,
  },
  {
    id: "4",
    name: "Carne de Carneiro",
    brand: "Friboi",
    price: 20,
  },
];

export const Home = () => {
  return (
    <Container>
      <ProductsOverViewCard />
      <ProductList productList={products} />
    </Container>
  );
};
