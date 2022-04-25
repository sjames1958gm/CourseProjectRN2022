import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const onAdd = (text) =>
    setGoals((goals) => [
      ...goals,
      {
        text,
        id: new Date().valueOf,
      },
    ]);

  const onDelete = (id) =>
    setGoals((goals) => goals.filter((goal) => goal.id != id));

  return (
    <View style={styles.appContainer}>
      <GoalInput onAdd={onAdd}></GoalInput>
      <View style={styles.listContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <GoalItem goal={goal} onPress={onDelete}></GoalItem>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 75,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc",
  },
  listContainer: {
    flex: 5,
  },
});
