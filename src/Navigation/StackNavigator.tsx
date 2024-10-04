import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GetStarted from "../screens/GetStarted";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import MarketplaceScreen from "../screens/MarketPlace";
import TimelineScreen from "../screens/Timeline";
import SettingsScreen from "../screens/Settings";
import ProfileScreen from "../screens/Profile";

export type StackParamList = {
  GetStarted: undefined;
  Register: undefined;
  Login: undefined;
  Dashboard: undefined;
  Marketplace: undefined;
  Timeline: undefined;
  Settings: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
      <Stack.Screen name="Timeline" component={TimelineScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
