import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BorderButton } from '../styles/form';
import { FontText } from '../styles/text';

export default function FormOutlinedButton(props) {
  const navigation = useNavigation();

  return (
    <BorderButton onPress={() => navigation.navigate(props.path)}>
      <FontText color="#002f67" size="18px">
        {props.string}
      </FontText>
    </BorderButton>
  );
}
