import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from './providers/AuthProvider';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import DrawerContent from './components/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authContext.data ? (
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          drawerStyle={{ backgroundColor: '#002f67' }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="ChangePassword" component={ChangePassword} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Main" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
