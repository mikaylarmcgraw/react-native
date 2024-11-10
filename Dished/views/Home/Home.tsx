import React from "react";
import Header from "../../components/Header";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";

export default function Home({ navigation }) {
  function handleMealPlanPress() {
    navigation.navigate("MealPlan");
  }

  function handleFindInspirationPress() {
    alert("find inspiration prep pressed!");
  }

  function handleNewRecipePress() {
    alert("add new recipe pressed!");
  }

  function handleUseWhatYouHavePress() {
    alert("We use what we have pressed!!");
  }
  return (
    <>
      <View style={styles.container}>
        <Header text="Welcome Mikayla!" fontWeight={"bold"} fontSize={25} />
        <Button
          text="Meal Plan"
          height={35}
          onPress={handleMealPlanPress}
          buttonMarginBottom={20}
        />
        <Button
          text="Find Inspiration!"
          onPress={handleFindInspirationPress}
          buttonMarginBottom={20}
        />
        <Button
          text="Enter New Recipe!"
          onPress={handleNewRecipePress}
          buttonMarginBottom={20}
        />
        <Button
          text="Use What You Have!"
          onPress={handleUseWhatYouHavePress}
          buttonMarginBottom={20}
        />
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
