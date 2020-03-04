import React, { useState, useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import bopeQ from '../assets/images/bopeQ.png';

import { AuthContext } from '../providers/AuthProvider';
import { CenteredScrollView } from '../styles/form';
import { FormInput } from '../styles/form';
import FormButton from '../components/FormButton';

export default function SignUp({ navigation }) {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  return (
    <CenteredScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image source={bopeQ} />
      </TouchableOpacity>
      <FormInput
        placeholder="Nome"
        autoCapitalize="none"
        value={user.name}
        onChangeText={name => setUser({ ...user, name: name })}
      />
      <FormInput
        placeholder="Usuário"
        autoCapitalize="none"
        value={user.username}
        onChangeText={username => setUser({ ...user, username: username })}
      />
      <FormInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={user.email}
        onChangeText={email => setUser({ ...user, email: email })}
      />
      <FormInput
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
        value={user.password}
        onChangeText={password => setUser({ ...user, password: password })}
      />
      <FormButton
        string="Cadastrar"
        path="Home"
        action={() => {
          authContext.signUp(user);
          navigation.navigate('Login');
        }}
      />
    </CenteredScrollView>
  );
}
