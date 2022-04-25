import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ goal, onPress }) {
  const handlePress = () => onPress(goal.id);

  return (
    <Pressable key={goal.id} onPress={handlePress}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
