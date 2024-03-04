import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { categories, colors } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = () => {
  const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("SingleCategory", { category: item.category })
      }
      style={{
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 12,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 16,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: 130,
          height: 120,
          resizeMode: "stretch",
          borderRadius: 12,
          marginBottom: 12,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: colors.COLOR_PRIMARY,
        }}
      >
        {item.name}
      </Text>
    </Pressable>
  );

  // const renderSeparator = () => <View style={{ width: 18 }} />;

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-around",
        }}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
