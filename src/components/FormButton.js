import React from 'react';

import { FullButton } from '../styles/form';
import { FontText } from '../styles/text';

export default function FormButton(props) {
  return (
    <FullButton onPress={props.action} marginTop={props.marginTop}>
      <FontText color="white" size="18px">
        {props.string}
      </FontText>
    </FullButton>
  );
}
