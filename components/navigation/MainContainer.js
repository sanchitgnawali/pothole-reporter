import React from "react";
import { View, Text, TabBarIOSItem } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

// import screens
import DetailsScreen from "./screens/ReportScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import ReportScreen from "./screens/ReportScreen";

//screen names
const homeName = "Home";
const reportName = "Report";
const settingName = "Setting";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = "home";
          } else if (rn === settingName) {
            iconName = "cog";
          } else if (rn === reportName) {
            iconName = "bullhorn";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={reportName} component={ReportScreen} />
    </Tab.Navigator>
  );
}
