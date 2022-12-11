import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { ProductForm } from "../screens/ProductForm";
import { MyNotes } from "../screens/MyNotes";

const { Navigator, Screen } = createBottomTabNavigator();

function handleIconTabBar(
  focused: boolean,
  color: string,
  size: number,
  route: any
) {
  let iconName;

  if (route.name === "Produtos") {
    iconName = focused
      ? "ios-information-circle"
      : "ios-information-circle-outline";
  }
  if (route.name === "Cadastrar") {
    iconName = focused ? "add" : "add-outline";
  } else if (route.name === "Notas") {
    iconName = focused ? "text" : "text-outline";
  }
  return <Ionicons name={iconName} size={size} color={color} />;
}

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return handleIconTabBar(focused, color, size, route);
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Screen name="Cadastrar" component={ProductForm} />
        <Screen name="Produtos" component={Home} />
        <Screen name="Notas" component={MyNotes} />
      </Navigator>
    </NavigationContainer>
  );
}
