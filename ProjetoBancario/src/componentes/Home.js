import React from 'react';
import { View, Button, Text,StyleSheet, ImageBackground } from 'react-native';
import { useRoute,  useNavigation, StackActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

function Home()  {
  const navigation = useNavigation();

  const nav = useNavigation();
  const route = useRoute();


  const loginData = route.params && route.params?.loginData;

  React.useLayoutEffect(() => {
      nav.setOptions({
          headerShown: false,
      })
  }, [nav]);

  return (

  
        <ImageBackground source={require('../../issets/imagem/aviao.jpg')} style={estilos.container}>
                
             <Text style={estilos.mensagem}>Bem-vindo a tela de operações do Banco Airline!</Text>
                  
             <Text style={estilos.mensagem1}>Aqui você poderá realizar o que precisa.</Text>

          <View>
             <TouchableOpacity style={estilos.containerBotao}
               onPress={()=> navigation.navigate('Saldo')}  >
               <Text style={estilos.botaoOperacao}>Saldo</Text>
             </TouchableOpacity>

             <TouchableOpacity style={estilos.containerBotao}
               onPress={()=> navigation.navigate('Saque')} >
               <Text style={estilos.botaoOperacao}> Saque</Text>
             </TouchableOpacity>

             <TouchableOpacity  style={estilos.containerBotao}
               onPress={()=> navigation.navigate('Depositar')} >
               <Text style={estilos.botaoOperacao}> Deposito</Text>
             </TouchableOpacity>

             <TouchableOpacity style={estilos.containerBotao}
               onPress={()=> navigation.navigate('Transferencia')} >
               <Text style={estilos.botaoOperacao}>Transferência</Text>
             </TouchableOpacity>

             <TouchableOpacity style={estilos.containerBotao}
               onPress={()=> navigation.navigate('Relatorio')} >
               <Text style={estilos.botaoOperacao}>Enviar Relatório</Text>
             </TouchableOpacity>
             

             <TouchableOpacity style={estilos.botaodesconectar}
               onPress={()=> navigation.navigate('Desconectar')} >
               <Text style={estilos.botaodesconecta}>Desconcetar Aplicativo</Text>
              </TouchableOpacity>
             
            


          
                
         </View>
     

        </ImageBackground>


    
  );
}

export default Home;


const estilos = StyleSheet.create({
  container: {
    flex:1,
    fontSize: 30,
    fontFamily:'bold',
    
    
  
    
    
  },
  mensagem:{
    color:'#000',
    fontWeight:'bold',
    fontSize:30,
    paddingStart:"5%",

    
    

},
mensagem1:{
    marginTop:10,
    marginTop:5,
    fontSize:20,
    color:"#000",
    fontWeight:"bold",
     paddingStart:"5%",
},



  botaoOperacao:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:20,
    backgroundColor:"#000",
    marginTop:70,
    borderRadius:5,
    width:160,
    paddingVertical:-2,



    
  },
  containerBotao:{
    marginTop:'100%',
    width:100,
    height:100,
    marginTop:5,
    
  
    

  },
  botaodesconectar:{
    marginTop:'100%',
    marginTop:5,
    alignSelf:'center',
    
  },
  botaodesconecta:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:20,
    backgroundColor:"#000",
    marginTop:80,
    borderRadius:5,
    height:30,
    

    

  }
 
 

    
    
  
});
/*
<Button style={estilos.botaoOperacao}
title="Saldo"
onPress={() => navigation.navigate('Saldo')}
/>



<Text>_____________</Text>
<Button
title="Saque"
onPress={() => navigation.navigate('Saque')}
/>
<Text>______________</Text>
<Button
title="Depósito"
onPress={() => navigation.navigate('Deposito')}
/>
<Text>______________</Text>
<Button
title="Transferência"
onPress={() => navigation.navigate('Transferencia')}
/>
<Text>______________</Text>
<Button
title="Relatório"
onPress={() => navigation.navigate('Relatorio')}
/>
<Text>______________</Text>
<Button 
title="Logout" 
onPress={handleLogout} 
/
*/