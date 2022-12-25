import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ProductContext } from "../../context/app.context";
import { IProductContext } from "../../interfaces/products.context";

import uuid from "react-native-uuid";

import { Container } from "./styles";

type FormData = {
  name: string;
  brand: string;
  price: string;
};

interface Props {
  route: any;
}

export const ProductForm: React.FC<Props> = ({ route }) => {
  const { saveProduct, products } = React.useContext(
    ProductContext
  ) as IProductContext;
  console.log("route", route);
  const navigation = useNavigation();

  const [editing, setEditing] = useState(false);

  const { control, reset, handleSubmit, setValue } = useForm<FormData>({
    mode: "onChange",
  });
  const { params } = route;

  if (params?.productId) {
    const { productId } = params;
    const productsCopy = [...products];
    const editingProduct = productsCopy.find((item) => item.id === productId);
    if (editingProduct) {
      console.log("aqui3");

      setValue("name", editingProduct.name);
      setValue("brand", editingProduct.brand);
      setValue("price", editingProduct.price + "");
    }
  }

  const submit = (data: FormData, e: any) => {
    const product = {
      id: `${uuid.v4()}`,
      name: data.name,
      brand: data.brand,
      price: +data.price,
    };
    saveProduct(product);
    reset();
    navigation.navigate("Produtos" as never);
  };

  return (
    <Container>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Nome"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="brand"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Marca"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            keyboardType="numeric"
            placeholder="Preço"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
      />

      <Button onPress={handleSubmit(submit)} color="#372b50">
        Cadastrar
      </Button>
    </Container>
  );
};
