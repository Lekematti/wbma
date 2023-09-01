import React, {useContext} from 'react';
import {Button, Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import ListItem from '../components/ListItem';
import {StatusBar} from 'expo-status-bar';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const {setIsLoggedIn} = useContext(MainContext);
  const logOut = async ()=> {
    console.log('profile, logout')
    try {
      await AsyncStorage.clear();
      setIsLoggedIn(false);
    }catch (error){
      console.error(error)
    }
  }
  return (
    <>
      <SafeAreaView style={ListItem}>
        <Text>Profile view</Text>
        <Button title='Log out!' onPress={logOut}/>
      </SafeAreaView>
      <StatusBar style="auto"/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
