import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { CenteredView } from '../styles/form';

export default function Home({ navigation }) {
  navigation.setOptions({
    leftArrow: true,
  });

  return (
    <CenteredView>
      <TouchableOpacity>
        <Text>Oi</Text>
      </TouchableOpacity>
    </CenteredView>
  );
}
