import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './Navigation'
import { Provider } from 'react-redux'
import Store from './Components/Store'

export default function App() {

  return (
    // <Provider store={Store}>
      <Navigation />
    // </Provider>
    
  )
}

const styles = StyleSheet.create({})