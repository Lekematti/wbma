import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';
import {StatusBar} from 'expo-status-bar';
import {Card} from '@rneui/themed';

const Single = ({route ,navigation}) => {
  //console.log('route params', route.params)
  const singleMedia = route.params
  return (
      <SafeAreaView>
        <Card>
          <Image
            style={{width: 100, height: 100, marginBottom: 5}}
            source={{uri: mediaUrl + singleMedia.filename}}
          />
          <Text>{singleMedia.title}</Text>
          <Text>{singleMedia.description}</Text>
          <Text>{singleMedia.user_id}</Text>
          <Text>{singleMedia.time_added}</Text>
        <StatusBar style="auto"/>
        </Card>
        </SafeAreaView>

  );
};

Single.prototype = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};


export default Single;
