import {TouchableOpacity, StyleSheet, Text, Image,} from 'react-native';
import PropTypes from 'prop-types';
const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
          style={styles.container}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
        <Text>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
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

export default ListItem;
