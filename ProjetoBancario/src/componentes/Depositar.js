import React, {useState, useEffect } from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';


const Depositar = ({ balance, setBalance }) => {
  const nav = useNavigation();
  const [valueDeposit, setValueDeposit] = useState('');

  const handleGoback = () => {
    nav.goBack();
  };

  const handleDeposit = () => {
    const valueDepositFloat = parseFloat(valueDeposit);

    if (!valueDeposit || isNaN(valueDeposit) || valueDeposit <= 0) {
      alert('Digite um valor de depósito válido.');
      return;
    }

    setBalance(balance + valueDepositFloat);
    alert(`Depósito de R$ ${valueDepositFloat.toFixed(2)} realizado com sucesso!`);
    setValueDeposit('');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Realizar Depósito</Text>
      <TextInput
        style={estilos.input}
        keyboardType="numeric"
        placeholder="Valor do Depósito"
        value={valueDeposit}
        onChangeText={setValueDeposit}
      />
      <TouchableOpacity style={estilos.Botao} onPress={handleDeposit}>
        <Text style={estilos.botaoTexto}>Realizar Depósito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.Botao} onPress={handleGoback}>
        <Text style={estilos.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Depositar;


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ffff',
  },
  ajeita: {
    color: 'red',
    fontFamily: 'serif',
    padding: 10,
  },
  input: {
    width: '50%',
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 5,
    marginBottom: 100,
    paddingHorizontal: 15,
    color:'#000',
  },
  titulo:{
    color:'#000',
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    


  },
  botaoTexto:{
   color:'#fff',
   alignSelf:'center',
   

  },
  Botao:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:20,
    backgroundColor:"#000",
    marginTop:50,
    borderRadius:5,
    width:100,
    paddingVertical:5,
  }
});

