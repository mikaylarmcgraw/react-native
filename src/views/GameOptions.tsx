import { StyleSheet, View } from "react-native";
import Button from "../components/Button/Button";

interface GameOptionsProps {
  navigation: () => void;
}

export default function GameOptions({ navigation }: GameOptionsProps) {
  return (
    <View style={styles.container}>
      <Button
        label="1 Player"
        onClick={() => {
          console.log("1Player!");
        }}
      />
      <Button
        label="2 Player"
        onClick={() => {
          console.log("2Player!");
        }}
      />
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
