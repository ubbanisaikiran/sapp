import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>
          <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
          <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
        </Stack.Navigator>
    );
  }
  
  export default Navigator;