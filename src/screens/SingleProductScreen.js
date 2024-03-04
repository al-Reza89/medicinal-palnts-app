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
import { colors } from "../Constant";

const SingleProductScreen = ({ navigation, route }) => {
  const { item } = route.params;

  console.log(item.id);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 32,
      }}
    >
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
              resizeMode: "stretch",
            }}
          />
        </View>
        <SafeAreaView>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              paddingTop: 20,
              paddingLeft: 10,
            }}
          >
            <FontAwesome5 name="arrow-circle-left" size={24} color="white" />
          </Pressable>
        </SafeAreaView>
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
            marginTop: "80%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginTop: 30,
              paddingHorizontal: 10,
              color: colors.COLOR_PRIMARY,
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
                  fontSize: 16,
                  marginVertical: 8,
                  paddingHorizontal: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Bengali Name: {item.bengaliName}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 8,
                  paddingHorizontal: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Family: {item.family}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 8,
                  paddingHorizontal: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Category: {item.category}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 8,
                  paddingHorizontal: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Method Of Propagation: {item.methodOfPropagation}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 8,
                  paddingHorizontal: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Used Part: {item.usedPart}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  marginVertical: 8,
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
    </SafeAreaView>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({});
