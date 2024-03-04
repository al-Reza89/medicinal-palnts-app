import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SingleCategoryScreen from "../screens/SingleCategoryScreen";
import SearchScreen from "../screens/SearchScreen";
import SingleProductScreen from "../screens/SingleProductScreen";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "react-native-paper";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { colors } = useTheme();
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <StatusBar
        style={isDarkTheme ? "light" : "dark"}
        backgroundColor={colors.background}
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SingleCategory" component={SingleCategoryScreen} />
        <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
