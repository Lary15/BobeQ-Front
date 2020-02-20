import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import bopeQ from '../assets/images/bopeQ.png';

import { CenteredView } from '../styles/form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function SignUp({ navigation }) {
  return (
    <CenteredView>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image source={bopeQ} />
      </TouchableOpacity>
      <FormInput placeholder="Nome" />
      <FormInput placeholder="Email" />
      <FormInput placeholder="Senha" />
      <FormInput placeholder="Confirmação de Senha" />
      <FormButton string="Cadastrar" path="Home" />
    </CenteredView>
  );
}
