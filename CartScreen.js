import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import * as Icon from "react-native-feather";
import { featured } from "../Constants/Index";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen({ restaurant }) {
  const navigation = useNavigation();
  const restaurants = featured.restaurants[0];
  return (
    <>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`relative py-4 shadow-sm`}>
          <TouchableOpacity
            style={tw`bg-orange-400 absolute z-10 rounded-full p-1 shadow top-9 left-2`}
          >
            <Icon.ArrowLeft
              strokeWidth={3}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          </TouchableOpacity>
          <View style={tw`mt-7`}>
            <Text style={tw`text-center font-bold text-xl`}>Your Cart</Text>
            <Text style={tw`text-center font-bold text-gray-500 text-xl`}>
              {restaurants.name}
            </Text>
          </View>
        </View>

        <View style={tw`bg-orange-200 flex-row px-4 items-center`}>
          <Image
            source={require("../assets/Images/bikeGuy.png")}
            style={tw`w-20 h-20 rounded-full`}
          />
          <Text style={tw`flex-1 pl-4`}>Delivery in 30-50 minutes</Text>
          <TouchableOpacity>
            <Text style={tw`font-bold text-orange-700`}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          style={tw`bg-white pt-5`}
        >
          {restaurants.dishes.map((dish, index) => {
            return (
              <View
                key={index}
                style={tw`flex-row items-center py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg`}
              >
                <Text style={tw`text-orange-500 font-bold`}>2x</Text>
                <Image
                  source={dish.image}
                  style={tw`h-14 w-14 rounded-full ml-3`}
                />
                <Text style={tw`flex-1 font-bold text-gray-700 ml-2`}>
                  {dish.name}
                </Text>
                <Text style={tw`text-gray-600 text-base`}>${dish.price}</Text>

                <TouchableOpacity
                  style={tw`p-1 rounded-full bg-orange-400 ml-2`}
                >
                  <Icon.Minus
                    strokeWidth={2}
                    width={20}
                    height={20}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View style={tw`bg-orange-200 rounded-3xl mt-4 p-6 px-8`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-500`}>Sub-Total</Text>
            <Text>$30</Text>
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-500`}>Delivery Fee</Text>
            <Text>$2</Text>
          </View>
          <View style={tw`bg-orange-400 w-full h-1 rounded-full my-3`}></View>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-500`}>Order-Total</Text>
            <Text>$32</Text>
          </View>

          <View>
            <TouchableOpacity
              style={tw`bg-orange-400  border rounded-full p-3 mt-5`}
              onPress={() => navigation.navigate("Order")}
            >
              <Text style={tw`text-center text-white font-bold text-xl`}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
