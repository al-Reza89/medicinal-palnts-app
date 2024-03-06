import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const HeaderDescription = () => {
  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: 12,
        paddingBottom: 12,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "green",
        }}
      >
        রোগ নিরাময়ে ঔষধি উদ্ভিদ
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
        বাংলাদেশ বন গবেষণা ইনস্টিটিউট, চট্টগ্রাম।
      </Text>
      <Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("http://www.bfri.gov.bd")}
        >
          <Text style={{ color: "green" }}>www.bfri.gov.bd</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default HeaderDescription;

const styles = StyleSheet.create({});
