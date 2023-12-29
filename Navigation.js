import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import Restaurant from './Screens/Restaurant';
import CartScreen from './Screens/CartScreen';
import OrderPreparing from './Screens/OrderPreparing';
import DeliveryScreen from './Screens/DeliveryScreen';


const Stack  = createNativeStackNavigator()

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false,
            }}>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Restaurant' component={Restaurant}/>
                <Stack.Screen name='Order' component={OrderPreparing} options={{
                    presentation: 'fullScreenModal'
                }}/>

                <Stack.Screen name='Cart' component={CartScreen} options={{
                    presentation:'modal'
                }}/>
                <Stack.Screen name='Delivery' component={DeliveryScreen} options={{
                    presentation: 'fullScreenModal'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 
