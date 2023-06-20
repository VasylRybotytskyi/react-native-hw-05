import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import * as Font from "expo-font";

import Home from "./Screens/Home";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// };

const MainStack = createStackNavigator();

export default function App() {
  // useEffect(() => {
  //   loadFonts();
  // }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
