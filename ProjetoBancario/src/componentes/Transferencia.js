import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Transferencia = ({ balance, setBalance, balance2, setBalance2 }) => {
  const nav = useNavigation();
  const [transferAmount, setTransferAmount] = useState('');
  const [transferToAccount, setTransferToAccount] = useState('');

  const handleGoBack = () => {
    nav.goBack();
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    const isValidAccount = transferToAccount === '202220'; 

    const isSameAccount = transferToAccount === '202220'; 

    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Digite um valor de transferência válido.');
      return;
    }

    if (!isValidAccount) {
      alert('Conta inválida!');
      return;
    }

    if (isSameAccount) {
      alert('Não é permitido transferir para a mesma conta em que você está logado.');
      return;
    }

    if (amount > balance) {
      alert('Saldo insuficiente. O valor da transferência excede o saldo disponível.');
      return;
    }

    setBalance(balance - amount);
    setBalance2(balance2 + amount);
    setTransferAmount('');
    alert(`Transferência de R$ ${amount.toFixed(2)} realizada com sucesso.`);
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Entrada de Dados </Text>
      <Text style={estilo.valor}>Saldo atual: R$ {balance.toFixed(2)}</Text>
      <TextInput
        style={estilo.input}
        keyboardType="numeric"
        placeholder="conta a ser recebida "
        value={transferToAccount}
        onChangeText={setTransferToAccount}
      />
      <TextInput
        style={estilo.input}
        keyboardType="numeric"
        placeholder="Valor tranferindo "
        value={transferAmount}
        onChangeText={setTransferAmount}
      />
      <TouchableOpacity style={estilo.Botao} onPress={handleTransfer}>
        <Text style={estilo.botaoTexto}>Realizar Transferência</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.Botao} onPress={handleGoBack}>
        <Text style={estilo.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transferencia;



const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008b8b',
  },
  ajeita: {
    color: 'red',
    fontFamily: 'serif',
    padding: 10,
  },
  input: {
    width: '50%',
    height: 40,
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  titulo:{
    color:'#000',
    marginTop:50,
    fontSize:30,

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
    marginTop:70,
    borderRadius:5,
    width:200,
    paddingVertical:5,
  },
  valor:{
    marginTop:50,
    color:'#000',
    fontSize:25

  }
});
