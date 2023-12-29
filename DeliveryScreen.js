import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { featured } from '../Constants/Index'
import { useNavigation } from '@react-navigation/native'
import tw from "twrnc"
import MapView, {Marker} from "react-native-maps"
import * as Icon from "react-native-feather";


export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0]
  const navigation = useNavigation()
  return (
    <View style={tw`flex-1`}>
      <MapView initialRegion={{
        longitude: restaurant.lng,
        latitude: restaurant.lat,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={tw`flex-1`}
      mapType='standard'
      >
        <Marker coordinate={{ longitude: restaurant.lng,
        latitude: restaurant.lat,}}
        title={restaurant.name}
        pinColor="orange"
        description={restaurant.description}
        />
      </MapView>

      <View style={tw`rounded-t-3xl -mt-12 bg-white relative`}>
      <TouchableOpacity
            style={tw`absolute left-4 bg-orange-500 p-2 rounded-full shadow w-9 h-9`}
          >
            <Icon.ArrowLeft
              stroke="white"
              strokeWidth={2}
              onPress={() => navigation.navigate("Cart")}
            />
          </TouchableOpacity>

          <View style={tw`flex-row justify-between px-5 pt-10`}>
            <View>
              <Text style={tw`text-lg text-gray-500 font-semibold`}>
                Estimated Arrival 
              </Text>
              <Text style={tw`text-3xl font-extrabold text-gray-700`}>
                30-40 minutes
              </Text>
              <Text style={tw`text-lg text-gray-500 font-semibold`}>
                Your Order is on its way
              </Text>
            </View>
            <Image style={tw`w-24 h-24`} source={require("../assets/Images/bikeGuy2.gif")}/>
          </View>

          
      </View>
      </View>
    
  )
}
