import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useIsFocused } from '@react-navigation/native';


const ContactScreen = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [contactList, setContactList] = useState([]);
    useEffect(() => {
        getData();
    }, [isFocused])

    const getData = async () => {
        try {
          const contacts = await AsyncStorage.getItem('CONTACTS');
          if (contacts !== null) {
            setContactList(JSON.parse(contacts));
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const deleteContact = async (index) => {
        const updatedContacts = contactList.filter((ind) => ind !== index);
        try {
          await AsyncStorage.setItem('CONTACTS', JSON.stringify(updatedContacts));
          setContactList(updatedContacts);
        } catch (error) {
          console.log(error);
        }
      };
      const LogOut = async() => {
        try{
            await AsyncStorage.setItem('EMAIL', '')
            await AsyncStorage.setItem('PASSWORD', '')
            navigation.navigate('LogIn')
            // console.log(EMAIL)
           }
           catch(e){
            Alert.alert('Something Went Wrong',e) 
           }
        

      }
    
    return (
        <View style={styles.container}>
            <View style={styles.upperbox}>
                <Text style={styles.maintext}>Contact</Text>
            </View>
            <View style={styles.lowerbox}>

                <FlatList data={contactList} renderItem={({ item, index }) => {
                    return (
                        <View style={styles.list}>
                            <Text style={styles.names}>{item.name.toUpperCase()}</Text>
                            <Text style={styles.mobiles}>{item.mobile}</Text>
                            <TouchableOpacity
                                onPress={()=>deleteContact(index)}
                                style={styles.btndlt}>
                                <Text style={styles.btndlttxt}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }} />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('AddContact')}>
                    <Icon name="plus" size={40} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>LogOut()}
                style={styles.Logoutbtn}>
                    <Text style={styles.logouttext}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    btn: {
        backgroundColor: '#6441A1',
        padding: 10,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderWidth: 2,
        borderColor: "#ccc",
        elevation: 10
    },
    maintext: {
        fontSize: 30,
        color: '#fff',
        fontWeight: "bold"

    },
    upperbox: {
        flex: 1,
        backgroundColor: '#6441A1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 40,
        shadowColor: '#000',

    },
    lowerbox: {
        flex: 10
    },
    list: {
        borderWidth: 2,
        borderColor: '#ccc',
        width: '95%',
        height: 60,
        alignSelf: 'center',
        margin: 5,
        elevation: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    names: {
        fontSize: 20,
        color: '#000',

    },
    mobiles: {
        fontSize: 20,
        color: '#000',
        marginLeft: 20

    },
    btndlt: {
        backgroundColor: '#D73222',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        elevation: 10,

    },
    btndlttxt: {
        fontWeight: 'bold',
        color: '#FFF'
    },
    Logoutbtn:{
        backgroundColor:"#6441A1",
        width:'40%',
        paddingVertical:15,
        bottom:20,
        left:20,
        alignItems:'center',
        borderWidth:2,
        borderColor:'#ccc',
        borderRadius:30,
        elevation:10,



    },
    logouttext:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
    }
})