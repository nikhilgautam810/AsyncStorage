import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import IntroScreen from './IntroScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    // useEffect(()=>{
    //     setEmailPassword()
    // },[isFocused])

    const setEmailPassword = async () => {
       try{
        await AsyncStorage.setItem('EMAIL', email)
        await AsyncStorage.setItem('PASSWORD', password)
        // navigation.navigate('Contact')
        if(email!==null && email!=='' && email!== undefined)
       {
        navigation.navigate('Contact');
       }
       else{
        Alert.alert('First you have to Login', 'Login Please')
        navigation.navigate('LogIn')
       }
       }
       catch(e){
        Alert.alert('Something Went Wrong',e) 
       }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.maintext}>Log In</Text>
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)} />
            <TextInput
                placeholder='Password'
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)} />
            <TouchableOpacity
                style={styles.btn}
                onPress={setEmailPassword}>
                <Text style={styles.btntext}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 20,
        elevation: 10,
        width: '80%',
        padding: 15,
        fontSize: 18,
        paddingLeft: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',


    },
    maintext: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4B4453',
        marginBottom: 50,
        borderBottomWidth: 3,
        borderColor: '#ccc'

    },
    btn: {
        marginTop: 30,
        backgroundColor: '#845EC2',
        padding: 10,
        paddingHorizontal: 120,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        elevation: 10,
    },
    btntext: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
})