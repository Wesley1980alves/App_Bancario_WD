import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const  Desconcetar = () => {
    const nav = useNavigation();

    const handleLogout = () => {
        nav.navigate('Login');
    }

    const handleGoback = () => {
        nav.goBack();
      };

      return (
        <View style={estilo.container}>
          <Text style={estilo.titulo}>Desconectar</Text>
          <Text style={estilo.texto}>Tem certeza de que deseja desconectar?</Text>
          <TouchableOpacity style={estilo.botao} onPress={handleLogout}>
            <Text style={estilo.botaotexto}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo.botao} onPress={handleGoback}>
            <Text style={estilo.botaotexto}>NÂO</Text>
          </TouchableOpacity>
        </View>
      );

};

export default Desconcetar;

const estilo= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      botao: {
        color: 'red',
        fontFamily: 'serif',
        fontSize: 24,
        marginBottom: 16,
      },
    texto:{
        marginTop:'100%',
        marginTop:5,
        alignSelf:'center',
        
    },
    botaotexto:{
        color: 'red',
        fontFamily: 'serif',
        fontSize: 24,
        marginBottom: 16,
    }
});