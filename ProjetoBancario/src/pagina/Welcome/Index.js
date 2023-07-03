
import { View, Text, StyleSheet, ImageBackground ,Image, TextInput, TouchableOpacity} from "react-native";
import { StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";





export default function Welcome(){
    const navigation = useNavigation(); 
    return(
      <ImageBackground   source={require('../../../issets/imagem/img.png')}

      style={estilos.container}>

        <View  style={estilos.container2}>
            <Text style={estilos.textoTelaLogin1}>Sistema Conta bancaria</Text>
            <Text style={estilos.textoTelaLogin2}>Desenvolvido por wesley e Dennis</Text>
            <Text style={estilos.textoTelaLogin3}>Cefet_mg</Text>
            


        <TouchableOpacity style={estilos.botaoInicial}
        onPress={()=> navigation.navigate('Login')} >
          <Text style={estilos.botaoEntrar}>Entrar</Text>
        </TouchableOpacity>
      
        </View>
      
        </ImageBackground>
    )
}

const estilos = StyleSheet.create({
    container: {
      flex:1,
    

    

  
    },
    container2:{
      flex:2,
      marginTop:15,
      

      

    },
  

    fonte: {
      fontSize: 50,
    },
  logotipo:{
    
    height:300,
    borderRadius:25,
    
    
    
    
  },

  dadosLogin:{
  marginTop:20,
  width:300,
  backgroundColor:'#00ced1',
  borderRadius:5,
  fontWeight:'bold',
  fontSize:20,
  padding:10,
  color:'#000',
  alignItems:'center',
  
  },
  
  textoTelaLogin1:{
    marginTop:10,
    fontSize:25,
    color:"#fff",
    paddingStart:'12%',
    fontWeight:'bold',
    
    
  },
  textoTelaLogin2:{
    marginTop:15,
    fontSize:20,
    color:"#fff",
    paddingStart:'9%',
    fontWeight:'bold',


  },
  textoTelaLogin3:{
    marginTop:15,
    fontSize:20,
    color:"#fff",
    paddingStart:'33%',
    fontWeight:'bold',


  },
  botaoInicial:{
    width:250,
    height:50,
    borderRadius:5,
    marginTop:500,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center',
    backgroundColor:'#fff',
    

    
  
  },
  botaoEntrar:{
    fontSize:40,
    color:'#000',
    fontWeight:'bold',
    


  
  
  }
  
  
  
  });

//  < Image 
        
  //      source={require( '../../../issets/imagem/logotipo.png')}
   // style={estilos.logotipo}/>