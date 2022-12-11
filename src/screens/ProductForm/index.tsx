import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ListRenderItem, Text } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container } from "./styles";

type FormData = {
  name: string;
  price: string;
};

export const ProductForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const submit = (data: any) => console.log(data);

  return (
    <Container>
      <Controller
        control={control}
        defaultValue=""
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Product Name"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        defaultValue="0"
        name="price"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            keyboardType="number-pad"
            placeholder="Product Name"
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
