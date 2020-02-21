import React from 'react';
import ModalProvider from '../services/ModalProvider';
import { Modal, TouchableOpacity, View, ScrollView } from 'react-native';

import { BoldText, RegularText, FontText } from '../styles/text';
import { ModalBackground, Row, Blur, Exit, FullButton } from '../styles/card';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faTimes,
  faStoreAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default function CardModal(props) {
  return (
    <ModalProvider.Consumer>
      {showModal => (
        <Modal visible={showModal} animationType="fade" transparent={true}>
          <Blur>
            <ModalBackground>
              <Exit>
                <TouchableOpacity onPress={props.dismissModal}>
                  <FontAwesomeIcon icon={faTimes} color={'grey'} size={23} />
                </TouchableOpacity>
              </Exit>
              <View style={{ paddingHorizontal: 30 }}>
                <BoldText
                  color="black"
                  size="20px"
                  marginBottom="25px"
                  textAlign="center">
                  Gustavo Rezende
                </BoldText>
                <Row marginBottom="8px">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ marginRight: 15 }}
                  />
                  <RegularText color="black" size="14px">
                    (76) 34342-3223
                  </RegularText>
                </Row>
                <Row marginBottom="8px">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: 15 }}
                  />
                  <RegularText color="black" size="14px">
                    <RegularText color="black" size="14px">
                      alessandroworking@gmail.com
                    </RegularText>
                  </RegularText>
                </Row>
                <Row marginBottom="8px">
                  <FontAwesomeIcon
                    icon={faStoreAlt}
                    style={{ marginRight: 15 }}
                  />
                  <RegularText color="black" size="14px">
                    Imobiliária
                  </RegularText>
                </Row>
                <Row marginBottom="20px">
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ marginRight: 15 }}
                  />
                  <RegularText color="black" size="14px">
                    Site da CJR
                  </RegularText>
                </Row>
                <ScrollView style={{ maxHeight: 120 }}>
                  <RegularText color="black" size="14px">
                    Bom dia. Faço parte de uma empresa de robótica educacional e
                    queremos desenvolver uma IDE de programação para o Arduino.
                    Bom dia. Faço parte de uma empresa de robótica educacional e
                    queremos desenvolver uma IDE de programação para o Arduino.
                  </RegularText>
                </ScrollView>
              </View>
              <FullButton>
                <FontText color="white" size="18px">
                  Contatado
                </FontText>
              </FullButton>
            </ModalBackground>
          </Blur>
        </Modal>
      )}
    </ModalProvider.Consumer>
  );
}
