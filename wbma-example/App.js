import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import {SafeAreaView, StyleSheet} from 'react-native';
import ListItem from './components/ListItem';



const App = () => {
  return (
    <>
      <SafeAreaView>
        <List/>
      </SafeAreaView>
      <StatusBar style="auto"/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
