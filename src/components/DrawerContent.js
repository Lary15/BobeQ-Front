import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import { CirculeImage, DrawerHeader, TextView, Item } from '../styles/drawer';
import { FontText } from '../styles/text';
import bowser from '../assets/images/bowser.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUserFriends,
  faPencilAlt,
  faLock,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader>
        <CirculeImage source={bowser} />
        <TextView>
          <FontText color="white" size="22px">
            Larissa Andrade
          </FontText>
        </TextView>
      </DrawerHeader>
      <Item
        onPress={() => props.navigation.navigate('Home')}
        topWidth={1}
        bottomWidth={0.5}>
        <FontAwesomeIcon icon={faUserFriends} color={'white'} size={22} />
        <FontText color="white" size="18px" style={{ paddingLeft: 15 }}>
          Meus Clientes
        </FontText>
      </Item>
      <Item
        onPress={() => props.navigation.navigate('Profile')}
        topWidth={0.5}
        bottomWidth={0.5}>
        <FontAwesomeIcon icon={faPencilAlt} color={'white'} size={22} />
        <FontText color="white" size="18px" style={{ paddingLeft: 15 }}>
          Editar Perfil
        </FontText>
      </Item>
      <Item topWidth={0.5} bottomWidth={0.5}>
        <FontAwesomeIcon icon={faLock} color={'white'} size={22} />
        <FontText color="white" size="18px" style={{ paddingLeft: 15 }}>
          Alterar Senha
        </FontText>
      </Item>
      <Item topWidth={0.5} bottomWidth={1}>
        <FontAwesomeIcon icon={faTimesCircle} color={'white'} size={22} />
        <FontText color="white" size="18px" style={{ paddingLeft: 15 }}>
          Sair
        </FontText>
      </Item>
    </DrawerContentScrollView>
  );
}
