import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Header from "../../components/Header";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Entry({ navigation }) {
  function onPress() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <Header text="Dished" fontWeight={"bold"} fontSize={50} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Whip something up!</Text>
        <Icon name="arrow-forward" size={20} color="#fff" style={styles.icon} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7D29EE",
    padding: 10,
    borderRadius: 6,
    flexDirection: "row",
    width: "50%",
    position: "absolute",
    bottom: "20%",
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 5,
  },
});
