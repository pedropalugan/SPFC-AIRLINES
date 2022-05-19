import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home/home';
import Options from './pages/option/option'
import Cadastro from './pages/cadastro/cadastro'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Options' component={Options} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({

});
