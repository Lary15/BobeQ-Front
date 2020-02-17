import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import bopeQ from '../assets/images/bopeQ.png';

import { CenteredView } from '../styles/form';

export default function Home({ navigation }) {
  return (
    <CenteredView>
      <TouchableOpacity>
        <Image source={bopeQ} />
      </TouchableOpacity>
    </CenteredView>
  );
}
