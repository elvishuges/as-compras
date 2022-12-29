import React, { useEffect, useState } from "react";
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
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import { ProductContext } from "../../context/app.context";
import { IProductContext } from "../../interfaces/products.context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  const { deleteProduct } = React.useContext(ProductContext) as IProductContext;

  const [editId, setEditId] = useState("");

  const deleteRow = (rowMap: any, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const prevIndex = productList.find((item) => item.id === rowKey);
    prevIndex ? deleteProduct(prevIndex) : "";
  };

  const handleEditRow = (id: string) => {
    setEditId(id);
    navigation.navigate(
      "Cadastrar" as never,
      {
        productId: id,
      } as never
    );
  };
  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const onRowOpen = (rowKey: string, rowMap: RowMap<IProductList>) => {
    setTimeout(() => {
      rowMap[rowKey] && rowMap[rowKey].closeRow();
    }, 2000);
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
        onPress={() => handleEditRow(rowData.item.id)}
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
        onRowOpen={onRowOpen}
      />
    </Container>
  );
};
