import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import Animation from './Assets/Animation.json'
import LOADING from './Assets/LOADING.json'

const IntroScreen = () => {
    const navigation = useNavigation();
    useEffect (() =>{
        setTimeout(()=>{
            navigation.navigate('LogIn');
            checkLogin();
        },3000)
    },[])

    const checkLogin = async () =>{
        const email =  await AsyncStorage.getItem('EMAIL');
       const password =  await AsyncStorage.getItem('PASSWORD');
       if(email!==null)
       {
        navigation.navigate('Contact');
       }
       else{
        navigation.navigate('LogIn')
       }
    };

    return (
        <View style={styles.container}>
            <LottieView
                source={Animation}
                autoPlay
                loop={true}
                resizeMode='center'
            />
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0A8B9',
        alignItems: 'center',
        justifyContent: 'center',
    }
})