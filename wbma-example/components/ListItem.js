import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types';
const ListItem = ({singleMedia}) => {
  return (
    <TouchableOpacity onPress={() => {
      console.log('touched', singleMedia.title)
    }}>
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{singleMedia.title}</Text>
        <Text style={styles.text}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
