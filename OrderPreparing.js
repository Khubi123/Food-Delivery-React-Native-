import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

export default function OrderPreparing() {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 3000);
    },[])
  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <Image source={require("../assets/Images/delivery.gif")} style={tw`w-80 h-80`}/>
    </View>
  )
}

const styles = StyleSheet.create({})