import React, { useCallback } from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components/native";
import THEME from "./src/theme";
import { AppRoutes } from "./src/routes/app.routes";
import { ProductProvider } from "./src/context/app.context";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ProductProvider>
      <ThemeProvider theme={THEME}>
        <AppRoutes />
      </ThemeProvider>
    </ProductProvider>
  );
}
