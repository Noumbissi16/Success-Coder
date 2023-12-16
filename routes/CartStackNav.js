import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import globalStyles from "../Styles/globalStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Cart from "../Screens/Cart";

const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: globalStyles.green,
        },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="Panier"
              iconName="shopping-cart"
              onPress={() => navigation.navigate("Cart")}
            />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="Menu"
              iconName="menu"
              onPress={() => navigation.openDrawer()}
            />
          </HeaderButtons>
        ),
      })}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Panier" }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
