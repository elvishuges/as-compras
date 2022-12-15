import React from "react";
import { ListRenderItem } from "react-native";

import {
  Container,
  ItemContainer,
  ItemNameBrand,
  ItemPrince,
  List,
  ItemImage,
} from "./style";

import { IProductList } from "./../../interfaces/user";
import { ProductContext } from "../../context/app.context";
import { IProductContext } from "../../interfaces/products.context";

interface Props {
  productList: IProductList;
}

const Item = ({ data }: { data: IProductList }) => (
  <ItemContainer>
    <ItemImage source={require("./../../assets/images.png")}></ItemImage>
    <ItemNameBrand>
      {data.name}
      {data.brand}
    </ItemNameBrand>
    <ItemPrince>{data.price} R$</ItemPrince>
  </ItemContainer>
);

export const ProductList: React.FC<Props> = ({ productList }) => {
  const { saveProduct } = React.useContext(ProductContext) as IProductContext;
  const renderItem: ListRenderItem<IProductList> = ({ item }) => (
    <Item data={item} />
  );

  return (
    <Container>
      <List
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item: IProductList) => item.id}
      />
    </Container>
  );
};
