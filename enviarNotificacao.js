import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import enviarNotificacao from './enviarNotificacao';

const QuadrodeAvisos = () => {
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    enviarNotificacao(titulo, mensagem);
    setTitulo('');  // Limpa o campo após enviar
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Notificação</Text>
      <TextInput
        placeholder="Digite o título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      
      <Text style={styles.label}>Mensagem da Notificação</Text>
      <TextInput
        placeholder="Digite a mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        style={styles.input}
      />
      
      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default QuadrodeAvisos;
