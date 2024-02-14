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

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
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
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 150,
                height: 150,
                resizeMode: "center",
              }}
            />
            <Text>{item.category}</Text>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
