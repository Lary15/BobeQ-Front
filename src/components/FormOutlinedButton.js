import React from 'react';
import styled from 'styled-components/native';

import {BorderButton} from '../styles/form';
import {BlueText} from '../styles/text';

export default function FormOutlinedButton(props) {
  return (
    <BorderButton>
      <BlueText>{props.string}</BlueText>
    </BorderButton>
  );
}
