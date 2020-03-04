import React, { useContext, useState } from 'react';
import { Image } from 'react-native';

import bopeQ from '../assets/images/bopeQ.png';

import { AuthContext } from '../providers/AuthProvider';

import { CenteredView } from '../styles/form';
import { FormInput } from '../styles/form';
import FormButton from '../components/FormButton';
import FormOutlinedButton from '../components/FormOutlinedButton';

export default function Login({ navigation }) {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <CenteredView>
      <Image source={bopeQ} />
      <FormInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <FormInput
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={text => setPassword(text)}
        returnKeyType="send"
        onSubmitEditing={() => authContext.signIn(email, password)}
      />
      <FormButton
        string="Entrar"
        action={() => authContext.signIn(email, password)}
      />
      <FormOutlinedButton string="Cadastro" path="SignUp" />
    </CenteredView>
  );
}
