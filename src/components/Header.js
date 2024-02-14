import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{}}>
        <Text>{headerText}</Text>
        <FontAwesome name="home" size={24} color="#f96163" />
      </View>
      <View style={{}}>
        <Text>{headerText}</Text>
        <FontAwesome name="home" size={24} color="#f96163" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
