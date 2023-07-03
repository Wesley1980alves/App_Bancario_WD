import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Relatorio = ({balance, balance2}) => {
    const nav = useNavigation();

    const handleGoBack = () => {
        nav.goBack();
    };


  return (
    <View style={estilo.container}>
        <Text style={estilo.titulo}> Dados Dos Cliente </Text>
      <View style={estilo.container2}>
        <Text style={estilo.texto}>Nome: wesley</Text>
        <Text style={estilo.texto}> Conta 1: 20</Text>
        <Text style={estilo.texto}>
          Saldo da Conta : R$ {balance.toFixed(2)}
        </Text>
      </View>
      <View style={estilo.container2}>
        <Text style={estilo.texto}>Nome: Dennis</Text>
        <Text style={estilo.texto}>Conta 2: 20</Text>
        <Text style={estilo.texto}>
          Saldo da Conta 2: R$ {balance2.toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity style={estilo.botao} onPress={handleGoBack}>
        <Text style={estilo.botaotexto}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Relatorio;

const estilo=StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 16,
  backgroundColor:'#00ced1'
},
titulo:{
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 24,
  color:'#000',
},
container2:{
 
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 15,
 
  
    width: '90%',
},
  texto : {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 24,
  color:'#000',
},
botao:{
  alignItems:"center",
  alignSelf:'center',
  width:"100%",
  borderRadius:10,
  paddingVertical:10,
  marginTop:15,
  fontSize:12,

  fontSize: 24,
  marginBottom: 18,
  backgroundColor:'#fff',
  

},
botaotexto:{
  color: '#000',
  fontFamily: 'bold',
  fontSize: 30,
  marginBottom: 30,
}

});