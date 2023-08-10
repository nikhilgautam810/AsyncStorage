import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './LogIn';
import ContactScreen from './ContactScreen';
import IntroScreen from './IntroScreen';
import AddContact from './AddContact';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Intro'
                    component={IntroScreen}
                    options={{headerShown:false}}
                />
                <Stack.Screen name='LogIn'
                 component={LogIn} 
                 options={{headerShown:false}}
                 />
                <Stack.Screen name='Contact'
                 component={ContactScreen} 
                 options={{headerShown:false}}
                />
                <Stack.Screen name='AddContact'
                 component={AddContact} 
                 options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})