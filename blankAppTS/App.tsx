import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { Fruit } from "./components/Fruit";
import { useState } from "react";

export default function App() {
  const [nameValue, setNameValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const [fruits, setFruits] = useState([
    { Name: "Apple", Price: "20kr" },
    { Name: "Pear", Price: "40kr" },
    { Name: "Banana", Price: "5kr" },
  ]);

  const handleName = (value) => {
    setNameValue(value);
  };
  const handlePrice = (value) => {
    setPriceValue(value);
  };
  const handlePress = () => {
    setFruits([...fruits, { Name: nameValue, Price: priceValue }]);
    setNameValue("");
    setPriceValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.header}>Hallååå</TextInput>
      <Fruit fruits={fruits} />
      <TextInput
        onChangeText={handleName}
        placeholder="Fruitname here!"
        value={nameValue}
      />
      <TextInput
        onChangeText={handlePrice}
        placeholder="Price here!"
        value={priceValue}
      />
      <Button title="Add fruit!" onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "orange",
    backgroundColor: "blue",
    margin: 50,
  },
});
