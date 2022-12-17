import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IProductList } from "./../../interfaces/user";

export const Container = styled.View`
  flex: 1;
  padding: 5px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
`;
export const List = styled(FlatList as new () => FlatList<IProductList>)`
  margin-bottom: 5px;
`;

export const ItemNameBrand = styled.Text`
  align-items: flex-start;
  font-size: 16px;
  color: #377a59;
  width: auto;
`;
export const ItemPrince = styled.Text`
  color: #ad1300;
  font-size: 18px;
`;

export const ItemImage = styled.Image`
  border-radius: 5px;
  width: 64px;
  height: 64px;
`;
