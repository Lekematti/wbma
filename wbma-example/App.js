import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import {Platform, SafeAreaView} from 'react-native';
import ListItem from './components/ListItem';
import {StyleSheet} from 'react-native';



const App = () => {
  return (
    <>
      <SafeAreaView style={ListItem}>
        <List/>
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

export default App;
