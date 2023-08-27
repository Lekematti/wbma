import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import {SafeAreaView,} from 'react-native';

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
export default App;
