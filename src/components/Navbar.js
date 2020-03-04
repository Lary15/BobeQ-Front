import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Nav, IconTouchable } from '../styles/navbar';
import { FontText } from '../styles/text';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  const navigation = useNavigation();

  return (
    <Nav>
      {props.leftArrow ? (
        <IconTouchable>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={'white'}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </IconTouchable>
      ) : (
        <IconTouchable>
          <FontAwesomeIcon
            icon={faBars}
            color={'white'}
            size={30}
            onPress={() => navigation.toggleDrawer()}
          />
        </IconTouchable>
      )}
      <FontText color="white" size="22px">
        {props.title}
      </FontText>
      <View style={{ width: 20 }} />
    </Nav>
  );
}
