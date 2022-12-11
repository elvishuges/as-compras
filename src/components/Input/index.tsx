import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, TextInput, Label } from "./style";

const Input: React.ElementType<TextInputProps> = ({
  placeholder,
  value,
  ...props
}: TextInputProps) => {
  const [isFocused, setFocus] = useState(false);
  const isActive: boolean = value != "";
  return (
    <Container>
      <Label isActive={isFocused || isActive}>{placeholder}</Label>
      <TextInput
        selectionColor={"black"}
        {...props}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </Container>
  );
};
export default Input;
