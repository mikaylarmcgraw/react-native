import React from "react";
import Header from "../../components/Header";
import { View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Header text="Welcome Mikayla!" fontWeight={"bold"} fontSize={40} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
