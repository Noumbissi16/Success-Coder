import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import globalStyles from "../Styles/globalStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import UserEditCourse from "../Screens/UserEditCourse";
import UserCourses from "../Screens/UserCourses";

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalStyles.green,
        },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,
      }}
    >
      <Stack.Screen
        name="Courses"
        component={UserCourses}
        options={({ navigation }) => ({
          title: "Mes Cours",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Editer"
                iconName="library-add"
                onPress={() =>
                  navigation.navigate("Edit", {
                    title: "Creer un cours",
                  })
                }
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
      />
      <Stack.Screen
        name="Edit"
        component={UserEditCourse}
        options={({ route }) => ({
          title: route.params.title ? route.params.title : "Editer le Cours",
        })}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
