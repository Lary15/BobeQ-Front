import React from 'react';
import styled from 'styled-components/native';

import {FullButton} from '../styles/form';
import {WhiteText} from '../styles/text';

export default function FormButton(props) {
  return (
    <FullButton>
      <WhiteText>{props.string}</WhiteText>
    </FullButton>
  );
}
