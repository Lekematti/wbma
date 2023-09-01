import { StatusBar } from 'expo-status-bar';
import Home from './views/Home';
import Navigator from './navigators/navigator';

const App = () => {
  return (
    <>
      <Navigator/>
      <StatusBar style="auto"/>
    </>
  );
};
export default App;
