import React, { useState } from 'react';
import ModalProvider from '../providers/ModalProvider';

import { GreyView } from '../styles/card';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardModal from '../components/CardModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const DATA = [
    {
      id: '1',
      name: 'Gustavo Rezende',
      phone: '(76) 34342-3223',
      email: 'hey@ya.com',
    },
    {
      id: '2',
      name: 'Cabral',
      phone: '(76) 34342-3223',
      email: 'homem0@yahoo.com.br',
    },
    {
      id: '3',
      name: 'Mina do Pagode',
      phone: '(76) 34342-3223',
      email: 'homem0@yahoo.com.br',
    },
    {
      id: '4',
      name: 'Batata',
      phone: '(76) 34342-3223',
      email: 'homem0@yahoo.com.br',
    },
  ];

  return (
    <ModalProvider.Provider value={showModal}>
      <Navbar title="Meus clientes" />
      <GreyView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            phone={item.phone}
            email={item.email}
            onPress={() => setShowModal(true)}
          />
        )}
      />
      <CardModal dismissModal={() => setShowModal(false)} />
    </ModalProvider.Provider>
  );
}
