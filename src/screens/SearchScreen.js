import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const SearchScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 32 : 0,
        marginHorizontal: 16,
      }}
    >
      {/* header  */}
      <Header headerText="Home" headerIcon="home" />
      {/* search filter */}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
