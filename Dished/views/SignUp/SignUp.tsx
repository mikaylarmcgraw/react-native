import React from "react";
import TextField from "../../components/TextField";
import FullName from "./Fields/FullName";
import PhoneNumber from "./Fields/PhoneNumber";
import Password from "./Fields/Password";
import Email from "./Fields/Email";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";

function onPress() {
  console.log("Create Account!!!");
}

function handleMealPlanPress() {
  alert("meal prep pressed!");
}

function handleFindInspirationPress() {
  alert("find inspiration prep pressed!");
}

function handleNewRecipePress() {
  alert("add new recipe pressed!");
}

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Header text="Sign up" fontWeight={"bold"} fontSize={40} />
      <FullName />
      <PhoneNumber />
      <Email />
      <Password />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
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
    width: "70%",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
