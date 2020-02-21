import React, { useState } from 'react';
import ModalProvider from '../services/ModalProvider';

import { GreyView } from '../styles/card';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardModal from '../components/CardModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalProvider.Provider value={showModal}>
      <Navbar title="Meus clientes" />
      <GreyView
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}>
        <CardModal dismissModal={() => setShowModal(false)} />
        <Card
          name="Gustavo Rezende"
          phone="(76) 34342-3223"
          email="luisfifa10@yahoo.com.br"
          onPress={() => setShowModal(true)}
        />
        <Card
          name="Gustavo Rezende"
          phone="(76) 34342-3223"
          email="eduardo.miorim@advocatta.org"
          onPress={() => setShowModal(true)}
        />
        <Card
          name="Gustavo Rezende"
          phone="(76) 34342-3223"
          email="josebernardo@garan.com.br"
          onPress={() => setShowModal(true)}
        />
        <Card
          name="Gustavo Rezende"
          phone="(76) 34342-3223"
          email="josebernardo@garan.com.br"
          onPress={() => setShowModal(true)}
        />
      </GreyView>
    </ModalProvider.Provider>
  );
}
