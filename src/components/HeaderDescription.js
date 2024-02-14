import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderDescription = () => {
  return (
    <View
      style={{
        alignItems: "center",
        fontSize: 22,
        fontWeight: "bold",
        fontColor: "green",
      }}
    >
      <Text>রোগ নিরাময় ঔষধি উদ্ভিদ</Text>
      <Text>Presented By</Text>
      <Text>বাংলাদেশ বন গবেষণা ইনিস্টিউট, চট্টগ্রাম</Text>
    </View>
  );
};

export default HeaderDescription;

const styles = StyleSheet.create({});
