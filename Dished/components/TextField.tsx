import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface TextFieldProps {
  placeholder: string;
  width: number | string;
  height: number;
  required: boolean;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  color?: string | "black";
}

export default function TextField({
  placeholder,
  height,
  color,
  width,
  required,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: TextFieldProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const styles = StyleSheet.create({
    input: {
      height: height,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: color,
      width: "70%",
    },
  });

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => handleInputChange(newValue)}
        value={inputValue}
        placeholder={placeholder}
      />
    </>
  );
}
