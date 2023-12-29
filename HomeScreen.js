import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import tw from "twrnc"
import * as Icon from "react-native-feather";
import Categories from '../Components/Categories'
import { featured } from '../Constants/Index'
import Featuredrow from '../Components/Featuredrow'

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white`}>
        <StatusBar style={tw`text-black`}/>
        <View style={tw`flex-row items-center px-4 pb-2`}>
            <View style={tw`flex-row flex-1 p-3 items-center rounded-full border border-gray-300`}>
                <Icon.Search height="25" width="25" stroke="black" />
                <TextInput placeholder='Restaurants' style={tw`ml-2 flex-1`}/>
                <View style={tw`flex-row items-center border-0 border-l-2 pl-2 border-l-gray-300`}>
                    <Icon.MapPin height="20" width={20} stroke="black"/>
                    <Text style={tw`text-gray-500 ml-2`}>Karachi, Pakistan</Text>
                </View>
            </View>

            <View style={tw`p-2 rounded-full bg-orange-400 ml-1`}>
                <Icon.Sliders height={20} width={20} stroke="black" strokeWidth={2.5}/>
            </View>
        </View>

      {/* main  */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:20,
      }}
      >
        {/* Categories  */}
        <Categories />

        {/* featured  */}
        <View style={tw`mt-5`}>
            {
                [featured, featured, featured].map((feature, index)=>{
                    return(
                        <Featuredrow 
                        key={index}
                        title={feature.title}
                        restaurants = {feature.restaurants}
                        descriptions={feature.description}

                        />
                    )
                })
            }
        </View>

      </ScrollView>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})