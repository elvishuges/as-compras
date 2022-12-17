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

interface ProductsOverViewCardPRops {
  productsTotalPrice: string;
}
export const ProductsOverViewCard: React.FC<ProductsOverViewCardPRops> = ({
  productsTotalPrice,
}) => {
  return (
    <Container>
      <ItemContainer>
        <ItemRow>
          <ProductInfos>
            <Title>{productsTotalPrice || 0} R$</Title>
            <Subtitle>Valor total dos produtos</Subtitle>
          </ProductInfos>
        </ItemRow>
      </ItemContainer>
    </Container>
  );
};
