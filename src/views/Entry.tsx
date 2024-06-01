import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button/Button";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export default function Entry() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  function handleGetStarted() {
    navigation.navigate("playOptions");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hangman</Text>
      <Button label="Play Now!" onClick={handleGetStarted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36F082",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#DC36F0",
  },
});
