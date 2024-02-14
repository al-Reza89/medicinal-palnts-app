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
        backgroundColor: "green",
        flex: 1,
      }}
    >
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
          marginTop: 180,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        {/* name of tree */}
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginTop: 150,
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
            {/* description */}

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
