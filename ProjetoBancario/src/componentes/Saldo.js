import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const Saldo = ({ balance }) => {
    const nav = useNavigation();

    const handleGoback = () => {
        nav.goBack();
    };

    return (
        <View style={estilos.container}>
            <Text style={estilos.saldoText}>SALDO</Text>
            <Text style={estilos.saldoText}>R$ {balance.toFixed(2)}</Text>
            <TouchableOpacity style={estilos.saldoText
            } onPress={handleGoback}>
                <Text style={estilos.saldoValue}>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    );
};
   
    export default Saldo;
    
    const estilos = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87cefa',
      },
      saldoText: {
        color: '#000',
        fontWeight:'bold',
        fontSize: 30,
        marginBottom: 30,
      },
      saldoValue: {
        color: '#fff',
        fontSize: 30,
      },
    });