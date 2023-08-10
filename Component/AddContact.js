import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


let contacts = [];
const AddContact = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const navigation = useNavigation();

    const saveContacts = async () => {
        const existingContacts = await AsyncStorage.getItem('CONTACTS');
        const parsedContacts = existingContacts ? JSON.parse(existingContacts) : [];
        const newContact = { name, mobile };
        const updatedContacts = [...parsedContacts, newContact];
    
        await AsyncStorage.setItem('CONTACTS', JSON.stringify(updatedContacts));
        navigation.goBack();
      };


    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Name'
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)} />
            <TextInput
                placeholder='Mobile'
                style={styles.input}
                value={mobile}
                onChangeText={(text) => setMobile(text)}
                keyboardType='number-pad' 
                maxLength={10}/>

            <TouchableOpacity
                style={styles.btn}
                onPress={saveContacts}>
                <Text style={styles.btntxt}>
                    Add Contact
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddContact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#fff',
        elevation: 10,
        width: '80%',
        marginBottom: 20,
        padding: 15,
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10

    },
    btn: {
        backgroundColor: '#BD38B2',
        paddingVertical: 15,
        width: "80%",
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10,
        elevation: 10,
        marginTop: 20

    },
    btntxt: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    }
})