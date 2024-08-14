import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dished</Text>
      <TouchableOpacity style={styles.button}>
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
  header: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
