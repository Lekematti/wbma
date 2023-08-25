import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import {Platform, SafeAreaView} from 'react-native';
import ListItem from './components/ListItem';



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
export default App;
