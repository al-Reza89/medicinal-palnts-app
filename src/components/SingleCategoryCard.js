import React, { useMemo } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, trees } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const SingleCategoryCard = ({ category }) => {
  const navigation = useNavigation();

  console.log({ category });

  const filteredTrees = useMemo(
    () => trees.filter((item) => item.category === category),
    [category]
  );

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("SingleProduct", { item })}
      style={{
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 13,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginVertical: 10,
      }}
    >
      <Image
        source={item.image}
        alt="tree"
        style={{
          width: 120,
          height: 110,
          resizeMode: "stretch",
          borderRadius: 13,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            paddingRight: 8,
            fontSize: 16,
            fontWeight: "bold",
            color: colors.COLOR_PRIMARY,
          }}
        >
          {item.bengaliName}
        </Text>
        <Text
          style={{
            paddingRight: 8,
            fontSize: 13,
            fontWeight: "bold",
            color: colors.COLOR_DARK,
          }}
        >
          {item.scientificName.length > 20
            ? `${item.scientificName.slice(0, 20)}...`
            : item.scientificName}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filteredTrees}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SingleCategoryCard;

const styles = StyleSheet.create({});
