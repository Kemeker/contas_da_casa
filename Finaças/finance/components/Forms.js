import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function Forms() {
  const [nome, setNome] = useState('');
  const [salario, setSalario] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false); // Estado para controlar a visibilidade do formulário

  const handleSubmit = () => {
    alert(`Nome: ${nome}, Salário: ${salario} Cadastrado com sucesso...`);
    setIsFormVisible(false); // Esconde o formulário após o envio
  };

  return (
    
        <View style={styles.container} >
            <TouchableOpacity onPress={()=> setIsFormVisible(true) }>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/256/1004/1004733.png' }}
                    style={{ width: 60, height: 60 }}
                />    
            </TouchableOpacity>
            {isFormVisible && (
            
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
                        style={styles.button}
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
    button: {
        backgroundColor: 'balck',
    },
    
});
  
