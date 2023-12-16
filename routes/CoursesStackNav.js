import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../Screens/Landing";
import CourseInfo from "../Screens/CourseInfo";
import globalStyles from "../Styles/globalStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
const Stack = createStackNavigator();

const CoursesStackNav = () => {
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
        name="Landing"
        component={Landing}
        options={{ title: "Catalogue" }}
      />
      <Stack.Screen
        name="Details"
        component={CourseInfo}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default CoursesStackNav;
