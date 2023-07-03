import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WithdrawScreen = ({balance, setBalance}) => {
  const nav = useNavigation();
  const [valueWithdraw, setValueWithdraw] = useState('');

  const handleGoback = () => {
    nav.goBack();
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(valueWithdraw);

    if (!withdrawAmount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Digite um valor válido')
      return;
    }

    if (withdrawAmount > balance) {
        alert('Saldo Insuficiente')
      return;
    }

    setBalance(balance - withdrawAmount);
    setValueWithdraw('');
    alert(`Depósito de R$ ${withdrawAmount.toFixed(2)} realizado com sucesso!`)
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>SAQUE</Text>
      <TextInput
        style={estilo.input}
        keyboardType="numeric"
        placeholder="Valor do Saque"
        value={valueWithdraw}
        onChangeText={setValueWithdraw}
      />
      <TouchableOpacity style={estilo.Botao} onPress={handleWithdraw}>
        <Text style={estilo.texto}>SACAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.Botao} onPress={handleGoback}>
        <Text style={estilo.texto}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithdrawScreen;


const estilo = StyleSheet.create({


  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  Botao:{
    marginTop:'100%',
    marginTop:5,
    alignSelf:'cente',

  },
  BotaoTexto:{

    marginTop:'100%',
    marginTop:5,
    alignSelf:'cente',

  },
  input:{
       width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
  }


});








/*
const Saque = ({balance, setBalance}) => {
  const nav = useNavigation();
  const [valueWithdraw, setValueWithdraw] = useState('');

  const handleGoback = () => {
    nav.goBack();
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(valueWithdraw);

    if (!withdrawAmount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Digite um valor válido')
      return;
    }

    if (withdrawAmount > balance) {
        alert('Saldo Insuficiente')
      return;
    }

    setBalance(balance - withdrawAmount);
    setValueWithdraw('');
    alert(`Depósito de R$ ${withdrawAmount.toFixed(2)} realizado com sucesso!`)
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Realizar Saque </Text>
      <TextInput
        style={estilo.input}
        keyboardType="numeric"
        placeholder="Valor do Saque"
        value={valueWithdraw}
        onChangeText={setValueWithdraw}
      />
      <TouchableOpacity style={estilo.Botao} onPress={handleWithdraw}>
        <Text style={estilo.BotaoTexto}>Sacar Valor </Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.Botao} onPress={handleGoback}>
        <Text style={estilo.BotaoTexto}>Voltar </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Saque;

const estilo=StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  Botao:{
    marginTop:'100%',
    marginTop:5,
    alignSelf:'cente',

  },
  BotaoTexto:{

    marginTop:'100%',
    marginTop:5,
    alignSelf:'cente',

  },
  input:{
       width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
  }


});*/
