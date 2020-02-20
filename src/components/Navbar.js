import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import { Nav } from '../styles/navbar';
import { FontText } from '../styles/text';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  const navigation = useNavigation();

  return (
    <Nav>
      {props.leftArrow ? (
        <FontAwesomeIcon
          icon={faChevronLeft}
          color={'white'}
          size={30}
          onPress={() => navigation.goBack()}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          color={'white'}
          size={30}
          onPress={() => navigation.toggleDrawer()}
        />
      )}
      <FontText color="white" size="20px">
        {props.title}
      </FontText>
      <View style={{ width: 20 }} />
    </Nav>
  );
}
