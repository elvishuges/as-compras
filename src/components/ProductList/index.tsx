import React from "react";
import { ListRenderItem, Text, TouchableOpacity, View } from "react-native";

import {
  Container,
  ItemContainer,
  ItemNameBrand,
  ItemPrince,
  ItemImage,
  HiddenTextItem,
  HidenItemContainer,
  TouchableHidenItem,
} from "./style";

import { IProductList } from "./../../interfaces/user";
import { SwipeListView } from "react-native-swipe-list-view";
import { ProductContext } from "../../context/app.context";
import { IProductContext } from "../../interfaces/products.context";

interface Props {
  productList: IProductList[];
}

const Item = ({ data }: { data: any }) => (
  <ItemContainer>
    <ItemImage source={require("./../../assets/images.png")}></ItemImage>
    <ItemNameBrand>{data.name}</ItemNameBrand>
    <ItemPrince>{data.price} R$</ItemPrince>
  </ItemContainer>
);

export const ProductList: React.FC<Props> = ({ productList }) => {
  const { deleteProduct } = React.useContext(ProductContext) as IProductContext;

  const deleteRow = (rowMap: any, rowKey: any) => {
    closeRow(rowMap, rowKey);
    const prevIndex = productList.find((item) => item.id === rowKey);
    prevIndex ? deleteProduct(prevIndex) : "";
  };
  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const renderHiddenItem = (rowData: any, rowMap: any) => (
    <HidenItemContainer>
      <TouchableHidenItem
        backgroundColor="red"
        onPress={() => deleteRow(rowMap, rowData.item.id)}
      >
        <HiddenTextItem backgroundColor="red" paddingLeft={2}>
          Deletar
        </HiddenTextItem>
      </TouchableHidenItem>
      <TouchableHidenItem
        onPress={() => closeRow(rowMap, rowData.item.key)}
        backgroundColor="grey"
      >
        <HiddenTextItem backgroundColor="red" paddingLeft={2}>
          Editar
        </HiddenTextItem>
      </TouchableHidenItem>
    </HidenItemContainer>
  );

  return (
    <Container>
      <SwipeListView
        useFlatList={true}
        data={productList}
        renderItem={(rowData, rowMap) => <Item data={rowData.item} />}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={105}
        rightOpenValue={-105}
        onRowOpen={(rowKey, rowMap) => {
          setTimeout(() => {
            rowMap[rowKey] && rowMap[rowKey].closeRow();
          }, 2000);
        }}
      />
    </Container>
  );
};
