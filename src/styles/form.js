import React from 'react';
import styled from 'styled-components/native';

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #e5e5e5;
`;

export const StyledInput = styled.TextInput`
  height: 45px;
  width: 320px;
  border: solid 1.5px #cccccc;
  border-radius: 5px;
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  padding-left: 15px;
  margin-top: 30px;
  background-color: white;
`;

export const FullButton = styled.TouchableOpacity`
  height: 45px;
  width: 320px;
  color: white;
  background-color: #002f67;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 45px;
`;

export const BorderButton = styled(FullButton)`
  border: solid 1.5px #002f67;
  background-color: #e5e5e5;
  margin-top: 30px;
`;
