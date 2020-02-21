import React from 'react';
import styled from 'styled-components/native';

import { StyledInput } from '../styles/form';

export default function FormInput(props) {
  return <StyledInput placeholder={props.placeholder} />;
}
