import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #261a40;
  height: 130px;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;

export const ItemContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ItemRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductInfos = styled.View`
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

export const Text = styled.Text`
  color: whitesmoke;
  font-size: 18px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 800;
  font-size: 25px;
`;

export const Subtitle = styled.Text`
  font-size: 10px;
  color: #a28fca;
  font-weight: 500;
  font-size: 12px;
`;

export const UserImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;
