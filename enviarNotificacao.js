import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import enviarNotificacao from './enviarNotificacao';

const QuadrodeAvisos = () => {
  const [mensagem, setMensagem] = useState('');

  return (
    <View>
      <Text>Enviar Notificação</Text>
      <TextInput
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Enviar" onPress={() => enviarNotificacao(mensagem)} />
    </View>
  );
};

export default QuadrodeAvisos;
