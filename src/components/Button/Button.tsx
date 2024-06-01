import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "yellow",
    color: "black",
    width: "40%",
    height: "5%",
    fontSize: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "pink",
    fontSize: 20,
    textAlign: "center",
    paddingTop: "5%",
  },
});
