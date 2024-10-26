import React from "react";
import { StyleSheet, Text } from "react-native";

interface HeaderProps {
  fontSize: number;
  text: string;
  fontWeight?: any;
}

export default function Header({ fontSize, fontWeight, text }: HeaderProps) {
  const styles = StyleSheet.create({
    header: {
      fontSize: fontSize,
      fontWeight: fontWeight,
    },
  });
  return (
    <>
      <Text style={styles.header}>{text}</Text>
    </>
  );
}
