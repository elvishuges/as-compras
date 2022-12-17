import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ListRenderItem, Text } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ProductContext } from "../../context/app.context";
import { IProductContext } from "../../interfaces/products.context";

import NumberFormat from "react-number-format";
import { NumericFormat } from "react-number-format";

import { Container } from "./styles";
import { TextInput } from "react-native";

type FormData = {
  name: string;
  brand: string;
  price: string;
};

export const ProductForm: React.FC = () => {
  const { saveProduct, products } = React.useContext(
    ProductContext
  ) as IProductContext;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const submit = (data: FormData) => {
    const product = {
      id: "",
      name: data.name,
      brand: data.brand,
      price: 123,
    };
    saveProduct(product);
  };

  return (
    <Container>
      <Controller
        control={control}
        defaultValue=""
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
        defaultValue=""
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
        defaultValue=""
        name="price"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            keyboardType="number-pad"
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
