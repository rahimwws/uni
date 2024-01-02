import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import OnBoarding from "../screens/OnBoarding";
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen name="Home" component={TabNavigation} options={{headerShown:false}} />
      <Stack.Screen name="onboarding" component={OnBoarding} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigation;
