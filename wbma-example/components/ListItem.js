import {TouchableOpacity, StyleSheet, View, Text, Image,} from 'react-native';
import PropTypes from 'prop-types';
import List from './List';
const ListItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.container}
          source={{uri: List.item.thumbnails.w160}}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.container}>{List.item.title}</Text>
        <Text>{List.item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem
