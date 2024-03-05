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
import { Appbar } from "react-native-paper";

const SingleCategoryScreen = ({ route }) => {
  const navigation = useNavigation();

  const { category } = route.params;
  console.log(category);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={category} />
      </Appbar.Header>
      <SafeAreaView
        style={{
          flex: 1,
          // paddingTop: Platform.OS === "android" ? 32 : 0,
          marginHorizontal: 16,
        }}
      >
        {/* header  */}
        {/* <Header headerText="Home" headerIcon="home" /> */}
        <Pressable
          onPress={() => navigation.navigate("Search", { category: category })}
        >
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
    </View>
  );
};

export default SingleCategoryScreen;

const styles = StyleSheet.create({});
