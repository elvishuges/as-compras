import React, { useCallback, useEffect, useState } from "react";
import { ListRenderItem, Text, TouchableOpacity, View } from "react-native";

import {
  Container,
  ItemContainer,
  ItemPrince,
  ItemImage,
  HiddenTextItem,
  HidenItemContainer,
  TouchableHidenItem,
  ItemInfos,
  Title,
  SubTitle,
} from "./style";

import { IProductList } from "./../../interfaces/user";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import { ProductContext } from "../../context/app.context";
import { IProductContext } from "../../interfaces/products.context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

interface Props {
  productList: IProductList[];
}

const Item = ({ data }: { data: IProductList }) => (
  <ItemContainer>
    <ItemImage source={require("./../../assets/images.png")}></ItemImage>
    <ItemInfos>
      <Title>{data.name}</Title>
      <SubTitle>{data.brand}</SubTitle>
    </ItemInfos>
    <ItemPrince>{data.price} R$</ItemPrince>
  </ItemContainer>
);

export const ProductList: React.FC<Props> = ({ productList }) => {
  const navigation = useNavigation();
  const { deleteProduct } = React.useContext(ProductContext) as IProductContext;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  const deleteRow = (rowMap: any, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const prevIndex = productList.find((item) => item.id === rowKey);
    prevIndex ? deleteProduct(prevIndex) : "";
  };

  useFocusEffect(
    useCallback(() => {
      fetch(
        "https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json"
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      // Do your work
    }, [])
  );

  const handleEditRow = (id: string) => {
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
