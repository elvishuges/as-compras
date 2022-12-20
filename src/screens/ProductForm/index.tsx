import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ListRenderItem, Modal } from "react-native";
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

export const ProductForm: React.FC = () => {
  const { saveProduct, products } = React.useContext(
    ProductContext
  ) as IProductContext;

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const submit = (data: FormData, e: any) => {
    console.log("data", data, "oi", e);

    const product = {
      id: `${uuid.v4()}`,
      name: data.name,
      brand: data.brand,
      price: +data.price,
    };
    saveProduct(product);
    reset();
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
