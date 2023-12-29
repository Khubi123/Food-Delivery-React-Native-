import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "twrnc";
import * as Icon from "react-native-feather";
import DishRow from "../Components/DishRow";
import CartIcon from "../Components/CartIcon";

export default function Restaurant(){
  const { params } = useRoute();
  const navigation = useNavigation();
  let items = params;
  // console.warn(items.image);
  return (
    <View>
      <CartIcon />
      {/* <StatusBar style="light"/> */}
      <ScrollView>
        <View style={tw`relative`}>
         <Image style={tw`w-full h-72`} source={items.image} />

          <TouchableOpacity
            style={tw`absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow`}
          >
            <Icon.ArrowLeft
              stroke="orange"
              strokeWidth={3}
              onPress={() => navigation.navigate("Home")}
            />
          </TouchableOpacity>

          <View style={tw`bg-white -mt-12 pt-6 rounded-t-3xl`}>
            <View style={tw`px-5`}>
              <Text style={tw`text-3xl font-bold ml-2`}>{items.name}</Text>
            </View>

            <View style={tw`flex-row my-1`}>
              <View style={tw`flex-row items-center`}>
                <Image
                  source={require("../assets/Images/fullStar.png")}
                  style={tw`h-4 w-4 ml-2`}
                />

                <Text style={tw`text-green-700 text-xl mr-5`}>
                  {items.stars}
                </Text>
                <Text style={tw`text-gray-500 mr-5`}>
                  ({items.reviews} reviews)
                </Text>
                <Text style={tw`font-semibold mr-4`}>{items.category}</Text>
              <View style={tw`flex-row items-center pt-3`}>
                <Icon.MapPin color="black" width={20} height={20} />
                <Text style={tw`text-gray-700 text-xs ml-2`}>
                  Nearby. {items.address}
                </Text>
              </View>
              </View>

            </View>
              <Text style={tw`text-gray-500 text-2xl mt-2 ml-3`}>{items.description}</Text>
          </View>
        </View>

        <View style={tw`pb-36 bg-white`}>
          <Text style={tw`px-4 py-4 text-2xl font-bold`}>
            Menu
          </Text>

          {/* dishes  */}
          {
            items.dishes.map((dish, index)=>{
              return <DishRow 
              item={{...dish}}
              key={index}
              />
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}

