import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Password from "./Fields/Password";
import Email from "./Fields/Email";
import Header from "../../components/Header";
import { Link } from "@react-navigation/native";

export default function LoginScreen({ navigation }) {
  const [isHovered, setIsHovered] = useState(false);

  function onPress() {
    navigation.navigate("Home");
  }

  return (
    <>
      <View style={styles.container}>
        <Header text="Login" fontWeight={"bold"} fontSize={40} />
        <Email />
        <Password />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Link
          style={[styles.link, isHovered && styles.linkHovered]}
          to={{ screen: "ForgotPassword" }}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          Forgot password?
        </Link>
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
  button: {
    alignItems: "center",
    backgroundColor: "#7D29EE",
    padding: 10,
    borderRadius: 6,
    width: "70%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    marginRight: 140,
    marginTop: 50,
    color: "blue",
  },
  linkHovered: {
    textDecorationLine: "underline",
  },
});
