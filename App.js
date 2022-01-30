import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainContainer from "./components/navigation/MainContainer";

const Stack = createStackNavigator();

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Main"
          component={MainContainer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
