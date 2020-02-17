import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { FullButton } from '../styles/form';
import { FontText } from '../styles/text';

export default function FormButton(props) {
  const navigation = useNavigation();

  return (
    <FullButton onPress={() => navigation.navigate(props.path)}>
      <FontText color="white" size="18px">
        {props.string}
      </FontText>
    </FullButton>
  );
}
