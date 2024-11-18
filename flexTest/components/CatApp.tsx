import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Cats } from "./Cats";

export interface Cat {
  Name: string;
  Age: string;
}

export const CatApp = () => {
  const [catName, setCatName] = useState<string>("");
  const [catAge, setCatAge] = useState<string>("");
  const [catArray, setCatArray] = useState<Cat[]>([]);

  const handleName = (value: string) => {
    setCatName(value);
  };
  const handleAge = (value: string) => {
    setCatAge(value);
  };
  const handlePress = () => {
    setCatArray([...catArray, { Name: catName, Age: catAge }]);
  };
  const handleDelete = () => {
    setCatArray([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.skyblueTop}></View>

      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Text>Name: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleName}
            placeholder="Name here!"
            value={catName}
          />
        </View>
        <View style={styles.inputField}>
          <Text>Age: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleAge}
            placeholder="Age here!"
            value={catAge}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button}>
          <Button title="Reset array" onPress={handleDelete} />
        </View>
        <View style={styles.button}>
          <Button title="Add cat" onPress={handlePress} />
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Cats cats={catArray} />
      </ScrollView>

      <View style={styles.skyblueBottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 25,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    margin: 25,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    gap: 10,
  },
  inputField: {
    alignItems: "flex-start",
    width: "50%",
  },
  textInput: {
    width: "100%",
    borderRadius: 1,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 10,
    padding: 5,
  },
  skyblueTop: {
    height: 50,
    backgroundColor: "skyblue",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  skyblueBottom: {
    height: 50,
    backgroundColor: "skyblue",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  scrollContainer: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 10,
  },
});
