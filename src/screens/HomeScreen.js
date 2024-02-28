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
import CategoryCard from "../components/CategoryCard";
import HeaderDescription from "../components/HeaderDescription";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 38 : 0,
        marginHorizontal: 16,
      }}
    >
      {/* header  */}
      <Header />
      <HeaderDescription />
      {/* search filter */}
      <Pressable
        onPress={() => navigation.navigate("Search", { category: "all" })}
      >
        <SearchFilter
          icon="search"
          placeholder="গাছের নাম/রোগের নাম দিয়ে খুজুন"
        />
      </Pressable>

      <View style={{ marginTop: 10, flex: 1 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Categories
        </Text>
        <CategoryCard />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
