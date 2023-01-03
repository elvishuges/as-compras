import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { ProductForm } from "../screens/ProductForm";
import { MyNotes } from "../screens/MyNotes";
import { Keyboard } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

function handleIconTabBar(
  focused: boolean,
  color: string,
  size: number,
  route: any
) {
  let iconName = "";

  if (route.name === "Produtos") {
    iconName = focused ? "list" : "list-outline";
  } else if (route.name === "Cadastrar") {
    iconName = focused ? "add" : "add-outline";
  }
  return <Ionicons name={iconName} size={size} color={color} />;
}

export function AppRoutes() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  console.log("isKeyboardVisible", isKeyboardVisible);

  function handleTabBarStyle(): string {
    return isKeyboardVisible ? "none" : "flex";
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const cond = "none";
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return handleIconTabBar(focused, color, size, route);
          },
          tabBarStyle: { display: "flex" },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Screen name="Produtos" component={Home} />
        <Screen name="Cadastrar" component={ProductForm} initialParams={{}} />
      </Navigator>
    </NavigationContainer>
  );
}
