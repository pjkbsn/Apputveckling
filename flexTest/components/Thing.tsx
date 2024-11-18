import React, { useRef } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ThingInterface } from "./ThingApp";

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: drag.value + 70 }],
    };
  });

  return (
    <Reanimated.View style={[styles.rightAction, styleAnimation]}>
      <Text style={styles.rightActionText}>Delete</Text>
    </Reanimated.View>
  );
}

export const Thing = ({
  thingArray,
  onRemoveItem,
  onCheckBoxPress,
  checkedItems,
}: any) => {
  return (
    <>
      <GestureHandlerRootView>
        {thingArray.map((thing: ThingInterface, index: number) => (
          <View style={styles.thingRow} key={thing.id}>
            <Pressable
              style={[
                styles.thingCheckBox,
                checkedItems[index] && styles.checked,
              ]}
              onPress={() => onCheckBoxPress(index)}
            >
              <Text style={styles.checkBoxText}>
                {checkedItems[index] ? "✔" : ""}
              </Text>
            </Pressable>
            <ReanimatedSwipeable
              containerStyle={styles.thingContainer}
              friction={2}
              enableTrackpadTwoFingerGesture
              rightThreshold={40}
              onSwipeableWillOpen={() => {
                onRemoveItem(index); // Ta bort objektet
              }}
              renderRightActions={RightAction}
            >
              <View style={styles.thingBorder}>
                <Text style={styles.thingText}>{thing.name}</Text>
                <Pressable onPress={() => onRemoveItem(index)}>
                  <Text style={styles.thingClose}>X</Text>
                </Pressable>
              </View>
            </ReanimatedSwipeable>
          </View>
        ))}
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  thingBorder: {
    flex: 1,
    flexDirection: "row",
  },
  rightActionText: {
    color: "white",
  },
  rightAction: {
    width: 70,
    height: "auto",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  thingContainer: {
    backgroundColor: "#e4cbff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  thingRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  thingText: {
    textAlign: "center",
  },
  thingClose: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  checked: {
    backgroundColor: "#e4cbff",
  },
  checkBoxText: {
    height: 20,
  },
  thingCheckBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 3,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
