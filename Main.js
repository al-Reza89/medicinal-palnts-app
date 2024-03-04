import React, { useContext } from "react";
import { PaperProvider, useTheme } from "react-native-paper";
import { ThemeContext } from "./src/contexts/ThemeContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
