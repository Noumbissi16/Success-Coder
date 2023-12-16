import { createDrawerNavigator } from "@react-navigation/drawer";
import CoursesStackNav from "./CoursesStackNav";
import { MaterialIcons } from "@expo/vector-icons";
import CartNavigator from "./CartStackNav";
import PaymentNavigator from "./PaymentStackNav";
import UserNavigator from "./UserStackNav";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={CoursesStackNav}
        options={{
          title: "Catalogue",
          drawerIcon: () => <MaterialIcons name="menu-book" size={24} />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Panier"
        component={CartNavigator}
        options={{
          title: "Panier",
          drawerIcon: () => <MaterialIcons name="shopping-cart" size={24} />,
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Payments"
        component={PaymentNavigator}
        options={{
          title: "Achats",
          drawerIcon: () => <MaterialIcons name="credit-card" size={24} />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MyCourses"
        component={UserNavigator}
        options={{
          title: "Mes Cours",
          drawerIcon: () => <MaterialIcons name="mic" size={24} />,
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};
