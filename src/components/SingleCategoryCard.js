import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors, trees } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const SingleCategoryCard = ({ category }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={trees.filter((item) => item.category === category)}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("SingleProduct", { item })}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
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
            <Text
              style={{
                paddingLeft: 8,
              }}
            >
              {item.category}
            </Text>
            <Image
              source={item.image}
              style={{
                width: 120,
                height: 120,
                resizeMode: "center",
                borderRadius: 16,
              }}
            />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SingleCategoryCard;

const styles = StyleSheet.create({});
