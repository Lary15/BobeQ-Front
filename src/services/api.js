import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Routes from './routes';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Navbar from '../components/Navbar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Main() {
  return (
    <Drawer.Navigator drawerPosition="left">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'Batata', leftArrow: true }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="screen">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitle: 'Meus Clientes',
            leftArrow: true,
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              return (
                <Navbar
                  title={options.headerTitle}
                  leftArrow={options.leftArrow}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
