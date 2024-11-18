import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Cat } from "./CatApp";

interface CatProps {
  cats: Cat[];
}

export const Cats = ({ cats }: CatProps) => {
  return (
    <>
      {cats.map((cat, index: number) => (
        <View key={index} style={styles.catContainer}>
          <Text style={styles.catText}>
            Name: {cat.Name}, Age: {cat.Age}
          </Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    backgroundColor: "#e4cbff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  catText: {
    textAlign: "center",
  },
});
