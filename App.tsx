import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './Component/AppNavigation';
import IntroScreen from './Component/IntroScreen';
import ContactScreen from './Component/ContactScreen';


const App = () => {
  return (
    <View style={styles.container}>
     <AppNavigation/>
     {/* <IntroScreen/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})