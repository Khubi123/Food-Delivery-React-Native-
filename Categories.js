import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { categories } from "../Constants/Index";


export default function Categories() {
  const [activeCategory, setactiveCategory] = useState(null);
  return (
    <View style={tw`ml-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`overflow-visible`}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
            let isActive = category.id === activeCategory
            let btnClass = isActive ? "bg-gray-600" : "bg-gray-200" 
            let textClass = isActive ? "font-semibold text-gray-800": "text-gray-600"

          return (
            <View key={index} style={tw`flex justify-center items-center mr-6`}>
              <TouchableOpacity
                style={tw`rounded-full p-3 bg-gray-100`}
                className={+btnClass}
                onPress={() => setactiveCategory(category.id)}
              >
                <Image style={tw`w-[45px] h-[45px]`}
                                source={category.image}
                                />
              </TouchableOpacity>
                <Text style={tw`text-sm`} className={+textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
