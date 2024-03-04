import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#469141",
    background: "#FFFFFF",
    text: "rgb(19, 20, 20)",
    card: "#ebebf2",
    cardText: "black",
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#469141",
    background: "#111924",
    text: "#FFFFFF",
    card: "#2a2a3b",
    cardText: "white",
  },
};
