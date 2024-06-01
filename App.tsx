import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GameOptions from "./src/views/GameOptions";
import Entry from "./src/views/Entry";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="playOptions" component={GameOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
