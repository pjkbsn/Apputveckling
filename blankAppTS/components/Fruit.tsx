import React from "react";
import { Text } from "react-native";

export const Fruit = ({ fruits }: any) => {
  return (
    <>
      {fruits.map((fruit: any, index: number) => (
        <Text key={index}>{`Fruit: ${fruit.Name}, Price: ${fruit.Price}`}</Text>
      ))}
    </>
  );
};
