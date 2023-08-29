import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import ListItem from '../components/ListItem';
import {StatusBar} from 'expo-status-bar';

const Profile = () => {
  return (
    <>
      <SafeAreaView style={ListItem}>
        <Text>Profile view</Text>
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
