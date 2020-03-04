import React from 'react';

import { CenteredScrollView } from '../styles/form';
import { CirculeImage } from '../styles/drawer';
import { FormInput } from '../styles/form';
import Navbar from '../components/Navbar';
import FormButton from '../components/FormButton';
import bowser from '../assets/images/bowser.jpeg';

export default function Home({ navigation }) {
  navigation.setOptions({
    leftArrow: true,
  });

  return (
    <>
      <Navbar title="Lary" leftArrow={true} />
      <CenteredScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <CirculeImage
          height="160px"
          width="160px"
          radius="80px"
          source={bowser}
        />
        <FormInput placeholder="Nome" />
        <FormInput placeholder="Email" />
        <FormButton string="Atualizar" path="Home" marginTop="35px" />
      </CenteredScrollView>
    </>
  );
}
