import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { CenteredView } from '../styles/form';
import Navbar from '../components/Navbar';

export default function Home({ navigation }) {
  navigation.setOptions({
    leftArrow: true,
  });

  return (
    <>
      <Navbar title="Lary" leftArrow={true} />
      <CenteredView>
        <TouchableOpacity>
          <Text>Oi</Text>
        </TouchableOpacity>
      </CenteredView>
    </>
  );
}
