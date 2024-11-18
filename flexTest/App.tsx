import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThingApp } from "./components/ThingApp";
import { CatApp } from "./components/CatApp";
import { Color3 } from "./components/Color3";
import { Color4 } from "./components/Color4";

export type RootStackTypes = {
  Home: undefined;
  Cats: undefined;
  Color3: undefined;
  Color4: undefined;
};

const Stack = createStackNavigator<RootStackTypes>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ThingApp} />
      <Stack.Screen name="Cats" component={CatApp} />
      <Stack.Screen name="Color3" component={Color3} />
      <Stack.Screen name="Color4" component={Color4} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </>
  );
}
