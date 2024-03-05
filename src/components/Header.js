import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 12,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/govt.png")}
          style={{
            width: 50,
            height: 50,
            resizeMode: "center",
            borderRadius: 16,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          GOVT.
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/bfri.png")}
          style={{
            width: 50,
            height: 50,
            resizeMode: "center",
            borderRadius: 16,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          BFRI
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
