import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/app-config';

const ListItem = ({singleMedia, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('touched!', singleMedia.title);
        navigation.navigate('Single', singleMedia);
      }}
    >
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100, borderRadius: 20}}
          source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        />
        <Text style={styles.text}>{singleMedia.title}</Text>
        <Text style={styles.text}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexWrap: 'wrap',
    flexGrow: 1,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    flexWrap: 'wrap',
    flexGrow: 1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#a5a5a5',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
