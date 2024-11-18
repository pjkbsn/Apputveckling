import UUID from "react-native-uuid";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Thing } from "./Thing";
import { useNavigation } from "@react-navigation/native";
import { RootStackTypes } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface ThingInterface {
  id: string;
  name: string;
}

export const ThingApp = () => {
  const [thingName, setThingName] = useState<string>("");
  const [thingArray, setThingArray] = useState<ThingInterface[]>([]);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackTypes>>();

  const handleThing = (value: any) => {
    setThingName(value);
  };
  const handlePress = () => {
    const newThing: ThingInterface = {
      id: UUID.v4(), // Generera unikt ID
      name: thingName,
    };
    setThingArray([...thingArray, newThing]); // Lägg till det nya objektet
    setCheckedItems([...checkedItems, false]); // Uppdatera checkbox-status
    setThingName(""); // Rensa input
  };
  const handleDelete = () => {
    setThingArray([]);
  };
  const handleRemoveItem = (index: number) => {
    setThingArray(thingArray.filter((_, i) => i !== index));
  };
  const handleCheckBoxPress = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.skyblueTop}></View>
      <Button title="Go to Cats" onPress={() => navigation.navigate("Cats")} />
      <Button
        title="Go to Color3"
        onPress={() => navigation.navigate("Color3")}
      />
      <Button
        title="Go to Color4"
        onPress={() => navigation.navigate("Color4")}
      />
      <View style={styles.inputField}>
        <Text>Thing: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleThing}
          placeholder={"Insert thing here!"}
          value={thingName}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.button}>
          <Button title="Add thing" onPress={handlePress} />
        </View>
        <View style={styles.button}>
          <Button title="Reset array" onPress={handleDelete} />
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Thing
          thingArray={thingArray}
          onRemoveItem={handleRemoveItem}
          onCheckBoxPress={handleCheckBoxPress}
          checkedItems={checkedItems}
        />
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
  },
  inputField: {
    margin: 25,
    backgroundColor: "#fff",
    alignItems: "flex-start",
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
