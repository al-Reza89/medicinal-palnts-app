import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const SingleProductScreen = ({ navigation, route }) => {
  const { item } = route.params;

  console.log(item);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          height: "50%",
          width: "100%",
          position: "absolute",
          objectFit: "cover",
        }}
      >
        <Image
          source={item.image}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
      <SafeAreaView>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            paddingTop: 40,
            paddingLeft: 10,
          }}
        >
          <FontAwesome5 name="arrow-circle-left" size={24} color="black" />
        </Pressable>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: "80%",
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginTop: 30,
          }}
        >
          {item.scientificName}
        </Text>
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 16,
                paddingHorizontal: 20,
                textAlign: "center",
              }}
            >
              {item.medicinalUsed}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({});
