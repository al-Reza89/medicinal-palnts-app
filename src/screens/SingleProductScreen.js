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
import { Appbar } from "react-native-paper";
import { TouchableOpacity, Linking } from "react-native";

const SingleProductScreen = ({ navigation, route }) => {
  const { item } = route.params;

  console.log(item.id);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{
          backgroundColor: "#fff",
          paddingTop: 4,
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={item.bengaliName} />
      </Appbar.Header>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              height: "55%",
              width: "100%",
              // position: "absolute",
              objectFit: "stretch",
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
          {/* <SafeAreaView>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              paddingTop: 20,
              paddingLeft: 10,
            }}
          >
            <FontAwesome5 name="arrow-circle-left" size={24} color="white" />
          </Pressable>
        </SafeAreaView> */}
          <View
            style={{
              backgroundColor: "#fff",
              flex: 1,
              // marginTop: "110%",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 23,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 10,
                paddingHorizontal: 10,
                color: colors.COLOR_PRIMARY,
              }}
            >
              <Text style={{ fontStyle: "italic" }}>
                {item.scientificName.split(" ").slice(0, 2).join(" ")}
              </Text>{" "}
              {item.scientificName.split(" ").slice(2).join(" ")}
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
                    marginVertical: 4,
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
                    marginVertical: 4,
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
                    marginVertical: 4,
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
                    marginVertical: 4,
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
                    marginVertical: 4,
                    paddingHorizontal: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Used Part: {item.usedPart}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginVertical: 4,
                    paddingHorizontal: 20,
                    textAlign: "center",
                  }}
                >
                  ব্যবহার:{" "}
                  <Text style={{ fontSize: 14, fontWeight: "400" }}>
                    {item.medicinalUsed}{" "}
                  </Text>
                </Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 20,
                  }}
                >
                  <Text>নাম: রোগ নিরাময়ে ঔষধি উদ্ভিদ</Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "green",
                    }}
                  >
                    Presented by
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    বাংলাদেশ বন গবেষণা ইনস্টিটিউট, চট্টগ্রাম
                  </Text>

                  <Text>
                    <TouchableOpacity
                      onPress={() => Linking.openURL("http://www.bfri.gov.bd")}
                    >
                      <Text style={{ color: "blue" }}>www.bfri.gov.bd</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({});
