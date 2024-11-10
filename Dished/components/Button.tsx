import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ButtonProps {
  text: string;
  width?: any;
  height?: number;
  onPress: () => void;
  buttonMarginRight?: number;
  buttonMarginLeft?: number;
  buttonMarginTop?: number;
  buttonMarginBottom?: number;
  color?: string | "black";
  textColor?: string;
}

export default function Button({
  text,
  onPress,
  height,
  color,
  width,
  buttonMarginBottom,
  buttonMarginLeft,
  buttonMarginRight,
  buttonMarginTop,
  textColor,
}: ButtonProps) {
  const [inputValue, setInputValue] = useState("");
  const [hasIcon, setHasIcon] = useState(false);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color || "#7D29EE",
      padding: 10,
      borderRadius: 6,
      width: width || "50%",
      marginBottom: buttonMarginBottom || 5,
      height: height,
    },
    buttonText: {
      color: textColor || "#ffff",
      fontWeight: "bold",
      textAlign: "center",
    },
    icon: {
      marginLeft: 5,
    },
  });

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
        {hasIcon && (
          <Icon
            name="arrow-forward"
            size={20}
            color="#fff"
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
    </>
  );
}
