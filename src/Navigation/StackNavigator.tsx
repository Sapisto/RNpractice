import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted";
import Register from "../screens/Register";
import Login from "../screens/Login";

export type StackParamList = {
  GetStarted: undefined;
  Register: undefined;
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
