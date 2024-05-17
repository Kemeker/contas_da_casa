import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import Adicionar from '../assets/adicionar.png';

export default function Forms() {
  const [nome, setNome] = useState('');
  const [salario, setSalario] = useState('');
  const [formularioVisivel, setFormularioVisivel] = useState(false); // Estado para controlar a visibilidade do formulário

  const handleSubmit = () => {
    alert(`Nome: ${nome}, Salário: ${salario} Cadastrado com sucesso...`);
    setFormularioVisivel(false); // Esconde o formulário após o envio
  };

  useEffect(() => {
    const voltarAcaoDoBotaoAdicionar = () => {
      if (formularioVisivel) {
        setFormularioVisivel(false); // Esconde o formulário se o botão voltar for pressionado
        return true; // Impede o comportamento padrão do botão voltar
      }
      return false; // Permite o comportamento padrão do botão
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', voltarAcaoDoBotaoAdicionar);

    return () => backHandler.remove();
  }, [formularioVisivel]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFormularioVisivel(true)}>
        <Image
          source={Adicionar}
          style={{ width: 60, height: 60 }}
        />
      </TouchableOpacity>
      {formularioVisivel && (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
          <Text style={styles.label}>Salário:</Text>
          <TextInput
            style={styles.input}
            value={salario}
            onChangeText={setSalario}
            placeholder="Digite seu salário"
            keyboardType="numeric"
          />
          <Button
            title="Enviar"
            onPress={handleSubmit}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  formContainer: {
    marginTop: 15,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    marginBottom: 3,
    color: 'black',
  },
});
