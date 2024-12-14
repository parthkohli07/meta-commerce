/* Libraries */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Pages */
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
/* Varibales & fucntions */
const Stack = createNativeStackNavigator();
/* main function */
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{header: () => null}}
        />
        <Stack.Screen name="Login" component={Login} options={{header: () => null}} />
        <Stack.Screen name="Home" component={Home} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}