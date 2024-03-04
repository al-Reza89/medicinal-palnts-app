import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderDescription = () => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "green",
        }}
      >
        রোগ নিরাময় ঔষধি উদ্ভিদ
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "green",
        }}
      >
        Presented By
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "green",
        }}
      >
        বাংলাদেশ বন গবেষণা ইনিস্টিউট, চট্টগ্রাম
      </Text>
    </View>
  );
};

export default HeaderDescription;

const styles = StyleSheet.create({});
