import React, { useState } from "react";
import Header from "../../components/Header";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../../components/Button";

const data = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
];

function handleMakePlanClick() {
  alert("Make plan pressed!!!!");
}

export default function MealPlan() {
  const [breakfastValue, setBreakfastValue] = useState("");
  const [isBreakfastFocus, setIsBreakfastFocus] = useState(false);
  const [lunchValue, setLunchValue] = useState("");
  const [isLunchFocus, setIsLunchFocus] = useState(false);
  const [dinnerValue, setDinnerValue] = useState("");
  const [isDinnerFocus, setIsDinnerFocus] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Header fontSize={20} text={"Meal Plan!"} />
        <Text>How Many Breakfasts?</Text>
        <Dropdown
          style={[styles.dropdown, isBreakfastFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={
            !isBreakfastFocus ? "Select Number of breakfasts" : "..."
          }
          value={breakfastValue}
          search
          onFocus={() => setIsBreakfastFocus(true)}
          onBlur={() => setIsBreakfastFocus(false)}
          onChange={(item) => {
            setBreakfastValue(item.value);
            setIsBreakfastFocus(false);
          }}
        />
        <Text>How Many Lunches?</Text>
        <Dropdown
          style={[styles.dropdown, isLunchFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isLunchFocus ? "Select Number of lunches" : "..."}
          value={lunchValue}
          search
          onFocus={() => setIsLunchFocus(true)}
          onBlur={() => setIsLunchFocus(false)}
          onChange={(item) => {
            setLunchValue(item.value);
            setIsLunchFocus(false);
          }}
        />

        <Text>How Many Dinners?</Text>
        <Dropdown
          style={[styles.dropdown, isDinnerFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isDinnerFocus ? "Select Number of dinners" : "..."}
          value={dinnerValue}
          search
          onFocus={() => setIsDinnerFocus(true)}
          onBlur={() => setIsDinnerFocus(false)}
          onChange={(item) => {
            setDinnerValue(item.value);
            setIsDinnerFocus(false);
          }}
        />
        <Button text={"Make Plan!"} onPress={handleMakePlanClick} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    height: 30,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 80,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 20,
    fontSize: 16,
  },
});
