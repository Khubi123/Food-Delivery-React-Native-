import { StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import * as Icon from "react-native-feather";
import {useNavigation} from "@react-navigation/native"


export default function RestaurantCard({item}) {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={()=> navigation.navigate("Restaurant", {...item})}>
      <View style={tw`mr-6 mb-4 bg-white rounded-3xl shadow-lg h-68`}>
        <Image style={tw`h-34 w-64 rounded-3xl`} source={item.image}/>
        <View style={tw`px-3 pb-6 mb-12 pt-3`}>
          <Text style={tw`font-bold text-xl`}>{item.name}</Text>
        <View style={tw`flex-row items-center `}>
          <Image source={require("../assets/Images/fullStar.png")} style={tw`h-4 w-4 ml-2`}/>
          
          <Text style={tw`text-green-700 text-xl mr-5`}>{item.stars}</Text>
          <Text style={tw`text-gray-500 mr-5`}>({item.reviews} reviews)</Text>
         <Text style={tw`font-semibold mr-4`}>{item.category}</Text>
         
        </View>

        <View style={tw`flex-row items-center pt-3`}>
          <Icon.MapPin color="black" width={20} height={20}/>
          <Text style={tw`text-gray-700 text-xs ml-2`}>Nearby. {item.address}</Text>
        </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})