import React from "react";
import {
  Container,
  ItemContainer,
  Text,
  ItemRow,
  ProductInfos,
  Title,
  Subtitle,
  UserImage,
} from "./style";

export const ProductsOverViewCard = () => {
  return (
    <Container>
      <ItemContainer>
        <ItemRow>
          <ProductInfos>
            <Title>100R$</Title>
            <Subtitle>Valor total dos produtos</Subtitle>
          </ProductInfos>
        </ItemRow>
      </ItemContainer>
    </Container>
  );
};
