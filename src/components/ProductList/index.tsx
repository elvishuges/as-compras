import React from "react";
import { ListRenderItem, Text, TouchableOpacity, View } from "react-native";

import {
  Container,
  ItemContainer,
  ItemNameBrand,
  ItemPrince,
  ItemImage,
  BackTextWhite,
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
  const { saveProduct, deleteProduct } = React.useContext(
    ProductContext
  ) as IProductContext;

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

  return (
    <Container>
      {/* <List
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item: IProductList) => item.id}
      /> */}
      <SwipeListView
        useFlatList={true}
        data={productList}
        renderItem={(rowData, rowMap) => <Item data={rowData.item} />}
        renderHiddenItem={(rowData, rowMap) => (
          <HidenItemContainer>
            <TouchableHidenItem
              onPress={() => deleteRow(rowMap, rowData.item.id)}
            >
              <BackTextWhite>Deletar</BackTextWhite>
            </TouchableHidenItem>
            <TouchableHidenItem onPress={() => rowMap[""].closeRow()}>
              <BackTextWhite>Editar</BackTextWhite>
            </TouchableHidenItem>
          </HidenItemContainer>
        )}
        leftOpenValue={75}
        rightOpenValue={-150}
        onRowOpen={(rowKey, rowMap) => {
          setTimeout(() => {
            rowMap[rowKey].closeRow();
          }, 2000);
        }}
      />
    </Container>
  );
};
