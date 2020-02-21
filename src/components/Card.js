import React from 'react';

import { BoldText, RegularText } from '../styles/text';
import { Background, Row } from '../styles/card';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
  return (
    <Background onPress={props.onPress}>
      <BoldText color="black" size="20px" marginBottom="25px">
        {props.name}
      </BoldText>
      <Row marginBottom="5px">
        <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: 15 }} />
        <RegularText color="black" size="14px">
          {props.phone}
        </RegularText>
      </Row>
      <Row>
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 15 }} />
        <RegularText color="black" size="14px">
          {props.email}
        </RegularText>
      </Row>
    </Background>
  );
}
