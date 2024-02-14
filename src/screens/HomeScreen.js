import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";

const HomeScreen = ({ navigation }) => {
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
      <Pressable onPress={() => navigation.navigate("Search")}>
        <SearchFilter icon="search" placeholder="Search" />
      </Pressable>
      {/* categories */}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Categories
        </Text>
        {/* categories list */}
        <CategoriesFilter />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
