import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';
import {StatusBar} from 'expo-status-bar';

const Single = ({route ,navigation}) => {
  //console.log('route params', route.params)
  const singleMedia = route.params
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image
            style={{width: 100, height: 100, marginBottom: 5}}
            source={{uri: mediaUrl + singleMedia.filename}}
          />
          <Text style={styles.text}>{singleMedia.title}</Text>
          <Text style={styles.text}>{singleMedia.description}</Text>
          <Text style={styles.text}>{singleMedia.user_id}</Text>
          <Text style={styles.text}>{singleMedia.time_added}</Text>
        </View>
        <StatusBar style="auto"/>
        </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    flexWrap: 'wrap',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#a5a5a5',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Single.prototype = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};


export default Single;
