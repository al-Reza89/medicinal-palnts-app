import {
  FlatList,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import HeaderDescription from "../components/HeaderDescription";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors, trees } from "../Constant";

const SearchScreen = ({ route }) => {
  const { category } = route.params;
  const searchInputRef = useRef(null);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  console.log({ category: category });

  const handleSearch = (text) => {
    setSearchQuery(text);

    if (category === "all") {
      const filtered = trees.filter(
        (tree) =>
          tree.bengaliName.includes(text) ||
          tree.scientificName.toLowerCase().includes(text.toLowerCase()) ||
          tree.family.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredResults(filtered);
      return;
    } else {
      const filtered = trees.filter(
        (tree) =>
          tree.category === category &&
          (tree.bengaliName.includes(text) ||
            tree.scientificName.toLowerCase().includes(text.toLowerCase()) ||
            tree.family.toLowerCase().includes(text.toLowerCase()))
      );
      setFilteredResults(filtered);
      return;
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? 32 : 0,
        marginHorizontal: 16,
      }}
    >
      <Header headerText="Home" headerIcon="home" />
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          paddingVertical: 16,
          borderRadius: 8,
          paddingHorizontal: 16,
          marginVertical: 16,
          shadowColor: "#000",
          alignItems: "center",

          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 7,
        }}
      >
        <FontAwesome name="search" size={20} color="#f96163" />
        <TextInput
          ref={searchInputRef}
          style={{
            flex: 1,
            paddingLeft: 8,
            fontSize: 16,
            color: "#808080",
          }}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Trees
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredResults.slice(0, 3)}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("SingleProduct", { item })}
              style={{
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                borderRadius: 16,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 8,
                paddingVertical: 8,
                marginVertical: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    paddingLeft: 8,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: colors.COLOR_PRIMARY,
                  }}
                >
                  {item.bengaliName}
                </Text>
                <Text
                  style={{
                    paddingLeft: 8,
                    fontSize: 13,
                    fontWeight: "bold",
                    color: colors.COLOR_DARK,
                  }}
                >
                  {item.scientificName.length > 20
                    ? `${item.scientificName.substring(0, 20)}...`
                    : item.scientificName}
                </Text>
                <Text
                  style={{
                    paddingLeft: 8,
                    fontSize: 13,
                    fontWeight: "bold",
                    color: colors.COLOR_DARK,
                  }}
                >
                  Family:{" "}
                  {item.family.length > 15
                    ? `${item.family.substring(0, 20)}...`
                    : item.family}
                </Text>
              </View>

              <Image
                source={item.image}
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "stretch",
                  borderRadius: 16,
                }}
              />
            </Pressable>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
