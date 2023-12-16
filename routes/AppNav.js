import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { DrawerNavigator } from "./DrawerNav";

function AppNav() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default AppNav;
