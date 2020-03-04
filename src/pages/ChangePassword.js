import React from 'react';

import { CenteredScrollView } from '../styles/form';
import { FormInput } from '../styles/form';
import Navbar from '../components/Navbar';
import FormButton from '../components/FormButton';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function ChangePassword() {
  return (
    <>
      <Navbar title="Alterar Senha" leftArrow={true} />
      <CenteredScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <FontAwesomeIcon icon={faLock} color={'grey'} size={140} />
        <FormInput placeholder="Senha Atual" />
        <FormInput placeholder="Nova Senha" />
        <FormInput placeholder="Confirmar nova senha" />
        <FormButton string="Entrar" path="Home" marginTop="35px" />
      </CenteredScrollView>
    </>
  );
}
