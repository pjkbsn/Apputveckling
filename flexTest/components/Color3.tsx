import { View, StyleSheet } from "react-native";

export const Color3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.yellow}></View>

      <View style={styles.row}>
        <View style={styles.orange}></View>
        <View style={styles.blue}></View>
      </View>

      <View style={styles.row}>
        <View style={styles.orange}></View>
        <View style={styles.green}></View>
        <View style={styles.orange}></View>
        <View style={styles.green}></View>
      </View>

      <View style={styles.orange}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
  },
  yellow: {
    flex: 0.5,
    backgroundColor: "yellow",
    marginBottom: 15,
    borderRadius: 10,
  },
  orange: {
    flex: 1,
    backgroundColor: "orange",
    borderRadius: 10,
  },
  blue: {
    flex: 1,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  green: {
    flex: 1,
    backgroundColor: "green",
    borderRadius: 10,
  },
});
