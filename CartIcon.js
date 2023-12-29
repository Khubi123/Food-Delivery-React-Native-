import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';


export default function CartIcon() {
  const navigation = useNavigation()
  
  return (
    <View style={tw`absolute bottom-5 w-full z-50`}>
      <TouchableOpacity style={tw`bg-orange-400 flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg`}
      onPress={()=>navigation.navigate("Cart")}
      >
        <View style={tw`p-2 px-4 rounded-full`}>
            <Text style={tw`font-extrabold text-white text-xl`}>6</Text>
        </View>
        <Text style={tw`flex-1 text-center font-extrabold text-white text-2xl`}>View Cart</Text>
        <Text style={tw`font-extrabold text-white text-lg`}>
            0
        </Text>
      </TouchableOpacity>
    </View>
  )
}
