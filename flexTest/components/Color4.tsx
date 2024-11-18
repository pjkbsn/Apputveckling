import { StyleSheet, View } from "react-native";

export const Color4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.skyblueTop}></View>
      <View style={styles.rowTop}>
        <View style={styles.blue}></View>
        <View style={styles.blue}></View>
      </View>
      <View style={styles.rowBottom}>
        <View style={styles.blue}></View>
        <View style={styles.blue}></View>
      </View>
      <View style={styles.skyblueBottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rowTop: {
    flex: 1,
    flexDirection: "row",
    marginTop: 100,
    marginBottom: 10,
  },
  rowBottom: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 100,
    marginTop: 10,
  },
  blue: {
    flex: 1,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 15,
  },
  skyblueTop: {
    flex: 0.3,
    backgroundColor: "skyblue",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  skyblueBottom: {
    flex: 0.3,
    backgroundColor: "skyblue",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
});
