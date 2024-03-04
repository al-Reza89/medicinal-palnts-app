import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemeContextProvider from "./src/contexts/ThemeContext";
import Main from "./Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
