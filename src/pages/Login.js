import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

import bopeQ from '../assets/images/bopeQ.png';

import {CenteredView} from '../styles/form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormOutlinedButton from '../components/FormOutlinedButton';

export default function Login() {
  return (
    <CenteredView>
      <Image source={bopeQ} />
      <FormInput placeholder="Nome" />
      <FormInput placeholder="Email" />
      <FormButton string="Entrar" />
      <FormOutlinedButton string="Cadastrar" />
    </CenteredView>
  );
}
