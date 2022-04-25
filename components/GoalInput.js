import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function GoalInput({ onAdd }) {
  const [goalText, setGoalText] = useState("");
  const addHandler = () => {
    onAdd(goalText);
    setGoalText("");
  };
  const inputHandler = (text) => {
    setGoalText(text);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Goal"
        onChangeText={inputHandler}
        value={goalText}
      ></TextInput>
      <Button title="Add" onPress={addHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc",
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
});
