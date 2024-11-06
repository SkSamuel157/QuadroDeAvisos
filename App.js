import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';

const QuadroDeAvisos = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const enviarNotificacao = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:5000/send-notification', {
        title: titulo,
        message: descricao,
      });
      Alert.alert("Sucesso", "Notificação enviada com sucesso!");
    } catch (error) {
      Alert.alert("Erro", `Erro ao enviar notificação: ${error.message}`);
    }
  };

  return (
    <View>
      <Text>Título da Notificação:</Text>
      <TextInput
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título"
        style={{ borderWidth: 1, padding: 8, margin: 5 }}
      />
      <Text>Descrição da Notificação:</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição"
        style={{ borderWidth: 1, padding: 8, margin: 5 }}
      />
      <Button title="Enviar Notificação" onPress={enviarNotificacao} />
    </View>
  );
};

export default QuadroDeAvisos;
