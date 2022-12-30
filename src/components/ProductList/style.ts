import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IProductList } from "./../../interfaces/user";

interface HiddenTextItemProps {
  paddingLeft: number;
  backgroundColor: string;
}
interface TouchableHidenItemProps {
  backgroundColor: string;
}
export const Container = styled.View`
  flex: 1;
  padding: 5px;
`;

export const Title = styled.Text`
  font-weight: 800;
  font-size: 16px;
`;

export const SubTitle = styled.Text`
  font-weight: 800;
  font-size: 12px;
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

export const HidenItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
`;
export const TouchableHidenItem = styled.TouchableOpacity<TouchableHidenItemProps>`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor}; ;
`;

export const List = styled(FlatList as new () => FlatList<IProductList[]>)`
  margin-bottom: 5px;
`;

export const ItemInfos = styled.View`
  flex-direction: column;
  width: auto;
  align-items: center;
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

export const Category = styled.TouchableOpacity`
  flex-direction: row;
  padding: 24px;
  align-items: center;
`;

export const HiddenTextItem = styled.Text<HiddenTextItemProps>`
  color: "#fff";
  padding-right: ${({ paddingLeft }) => paddingLeft}px;
`;
