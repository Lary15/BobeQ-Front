import React from 'react';
import { Image } from 'react-native';

import bopeQ from '../assets/images/bopeQ.png';

import { CenteredView } from '../styles/form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormOutlinedButton from '../components/FormOutlinedButton';

export default function Login({ navigation }) {
  return (
    <CenteredView>
      <Image source={bopeQ} />
      <FormInput placeholder="Nome" />
      <FormInput placeholder="Email" />
      <FormButton string="Entrar" path="Home" />
      <FormOutlinedButton string="Cadastro" path="SignUp" />
    </CenteredView>
  );
}
