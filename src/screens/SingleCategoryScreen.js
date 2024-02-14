import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import { useNavigation } from "@react-navigation/native";
import CategoryCard from "../components/CategoryCard";
import SingleCategoryCard from "../components/SingleCategoryCard";
import HeaderDescription from "../components/HeaderDescription";

const SingleCategoryScreen = ({ route }) => {
  const navigation = useNavigation();

  const { category } = route.params;
  console.log(category);

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
      <HeaderDescription />
      {/* search filter */}
      <Pressable onPress={() => navigation.navigate("Search")}>
        <SearchFilter icon="search" placeholder="Search" />
      </Pressable>
      {/* categories Card */}
      <View style={{ marginTop: 10, flex: 1 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            paddingBottom: 20,
          }}
        >
          Categories
        </Text>
        <SingleCategoryCard category={category} />
      </View>
    </SafeAreaView>
  );
};

export default SingleCategoryScreen;

const styles = StyleSheet.create({});
