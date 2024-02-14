import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesome name="home" size={24} color="#f96163" />
        <Text>GOVT.</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesome name="home" size={24} color="#f96163" />
        <Text>BFRI</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
