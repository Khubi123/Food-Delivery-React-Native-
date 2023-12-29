import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import * as Icon from "react-native-feather";


export default function DishRow({item}) {
   
  return (
    <View style={tw`flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-2 mx-2`}>
        <Image 
        style={tw`rounded-3xl h-[100px] w-[100px]`}
        source={item.image}
        />
        <View style={tw`flex flex-1 `}>
            <View style={tw`pt-3`}>
                <Text style={tw`font-bold text-xl ml-3`}>{item.name}</Text>
                <Text style={tw`text-gray-700 ml-3`}>{item.description}</Text>
            </View>

            <View style={tw`flex-row justify-between pl-3 items-center`}>
                <Text style={tw`text-gray-600 text-lg font-bold`}>$ {item.price}</Text>

                <View style={tw`flex-row items-center`}>
                    <TouchableOpacity style={tw`p-1 rounded-full bg-orange-400`}
                    // onPress={decrease}
                    >
                        <Icon.Minus strokeWidth={2} width={20} height={20} color="white"/>
                    </TouchableOpacity>
                    <Text style={tw`px-2`}>
                        4
                    </Text>

                    <TouchableOpacity style={tw`p-1 rounded-full bg-orange-400`}
                    // onPress={increase}
                    >
                        <Icon.Plus strokeWidth={2} width={20} height={20} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})