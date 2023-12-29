import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import RestaurantCard from './RestaurantCard'

export default function Featuredrow({title, descriptions, restaurants}) {
  return (
   <>
    <View style={tw`flex-row justify-between items-center px-4 `}>
        <View>
            <Text style={tw`font-bold text-lg`}>{title}</Text>
            <Text style={tw`text-gray-600 text-xs`}>{descriptions}</Text>
        </View>

        <TouchableOpacity style={tw`flex flex-row items-center justify-center m-5`}>
            <Text style={tw`font-bold text-orange-600`}>See All</Text>
        </TouchableOpacity>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingHorizontal:15
    }}
    style={tw`overflow-visible py-5`}
    >
        {
            restaurants.map((restaurant, index)=>{
                return (
                    <RestaurantCard 
                    key={index}
                    item={restaurant}
                    />
                )
            })
        }
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})