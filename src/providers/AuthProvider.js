import React, { createContext, useEffect, useState, useMemo } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { signIn, signUp } from '../services/user';

export const AuthContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(res => setUser(JSON.parse(user)))
      .catch(e => console.log(e));
  }, [user]);

  const userHandle = useMemo(
    () => ({
      data: user,
      signUp: async user => {
        try {
          await signUp(user);
        } catch (e) {
          console.log(e);
        }
      },
      signIn: async (email, password) => {
        try {
          const response = await signIn(email, password);
          await AsyncStorage.setItem('user', JSON.stringify(response.data));
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.clear();
          setUser(null);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={userHandle}>{children}</AuthContext.Provider>
  );
};
export default Auth;
