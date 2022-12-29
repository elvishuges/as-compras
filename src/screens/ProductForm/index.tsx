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

//https://github.com/react-navigation/react-navigation/issues/6674

export const ProductForm: React.FC<Props> = ({ route }) => {
  const [editing, setEditing] = useState(false);
  const [editingProductId, setDditingProductId] = useState("");

  const { saveProduct, products, updateProducts } = React.useContext(
    ProductContext
  ) as IProductContext;

  const navigation = useNavigation();

  const { control, reset, handleSubmit, setValue } = useForm<FormData>({
    mode: "onChange",
  });

  useEffect(() => {
    const { params } = route;
    if (params && "productId" in params) {
      const { productId } = params;
      setEditing(true);
      setDditingProductId(productId);
      loadFormByProductID(productId);
      delete params.productId;
    } else {
      setEditing(false);
      reset();
    }
  }, [route]);

  function loadFormByProductID(productId: string) {
    const productsCopy = [...products];
    const editingProduct = productsCopy.find((item) => item.id === productId);
    if (editingProduct) {
      setValue("name", editingProduct.name);
      setValue("brand", editingProduct.brand);
      setValue("price", editingProduct.price + "");
    }
  }

  const submit = (data: FormData, e: any) => {
    const id = editing ? editingProductId : `${uuid.v4()}`;
    const product = {
      id: id,
      name: data.name,
      brand: data.brand,
      price: +data.price,
    };
    if (!editing) {
      saveProduct(product);
    } else {
      const copyProducts = [...products];
      const productIndex = copyProducts.findIndex(
        (product) => product.id === id
      );

      copyProducts[productIndex] = product;
      updateProducts(copyProducts);
    }

    reset();
    setEditing(false);
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
