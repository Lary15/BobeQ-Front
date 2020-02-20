import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import bopeQ from '../assets/images/bopeQ.png';

import { CenteredView } from '../styles/form';
import Navbar from '../components/Navbar';

export default function Home({ navigation }) {
  return (
    <>
      <Navbar title="Meus clientes" />
      <CenteredView>
        <TouchableOpacity>
          <Image source={bopeQ} />
        </TouchableOpacity>
      </CenteredView>
    </>
  );
}
