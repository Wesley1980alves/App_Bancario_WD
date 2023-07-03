import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet,KeyboardAvoidingView,View,Text,TextInput,TouchableOpacity ,Button,Image, ImageBackground} from "react-native";
import * as Animatable from 'react-native-animatable';
import { State } from "react-native-gesture-handler";



export default function Login(){
    const navigation = useNavigation();

   // const [senha,setSenha] = useState("");
    //const [matricula,setMatricula] = useState("");

    const [nConta, setnConta] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (nConta === 'dennis' && password === '22' || nConta === 'wesley' && password === '20') {
          // Autenticação bem-sucedida, redirecionar para a tela principal
          const loginData = { nConta, password };
          navigation.navigate('Home', { loginData });
        } else {
          // Autenticação falhou, exibir mensagem de erro ou realizar outra ação
          alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    };
  
    // Ocultar o cabeçalho na tela de login
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);   

    return(
        
        <ImageBackground source={require('../../../issets/imagem/aviao.jpg')}
        style={estilos.container}>
            <KeyboardAvoidingView behavior="padding">
            
        <View style={estilos.container} >
            <Animatable.View  animation="fadeInRight" delay={800}   style={estilos.container2}>
           
            <Text style={estilos.mensagem}> Banco Airline </Text> 
            <Text style={estilos.mensagem1}>O Banco que cuida de tudo pra você </Text> 
           
            </Animatable.View > 
        
      
            <View style={estilos.container3} >
                <View>
                    <Text style={estilos.disponivel}>Acesso disponível: </Text>
                    <Text style={estilos.disponivel}>Usuário 1:dennis Senha:20222018143 </Text>
                    <Text style={estilos.disponivel}>Usuário 2:Wesley Senha: 20222017941 </Text>

                </View>
        
             
                <TextInput 
                placeholder="Digite Nome Para Entrar " 
                style={estilos.textoNome}
                value={nConta}
                onChangeText={setnConta}/>
                



                
                <TextInput 
                secureTextEntry={true}
                placeholder="Digite Sua Senha  " 
                value={password}
                onChangeText={setPassword}
                style={estilos.textoNome}
                />
                

                <TouchableOpacity 
                   onPress={(handleLogin)=> navigation.navigate('Home')}>
                        <Button style={estilos.botaoAcessar} title="ENTRAR" onPress={handleLogin} />
                  
                </TouchableOpacity>
                

                <TouchableOpacity style={estilos.botaoRegistrar}>
                    <Text style={estilos.botaoRegistrar}> Não possue Conta ?  Cadastre-se !</Text>
                </TouchableOpacity>
           


            </View>
      
       
        
         
        </View>

        </KeyboardAvoidingView>
        </ImageBackground>
        

        
         
    )
}


 const estilos= StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingVertical:20,
       

    },
    disponivel:{
        fontWeight:'bold',
        fontSize:16,
        color:"#fff",


    },

    container2:{
        
        marginTop:'30%',
        marginBottom:'8%',
        paddingStart:'15%', 
     
    
    },
   
    container3:{
        
        paddingEnd:'14%',
        paddingStart:'14%',
        marginTop:'50%',

    

    },

    mensagem:{
        color:'#000',
        fontWeight:'bold',
        fontSize:35,
        
        

    },
    mensagem1:{
        
        marginTop:10,

        marginTop:5,
        fontSize:20,
        color:"#000",
        fontWeight:"bold",

    },

    nomeEntrar:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',

        
    },

    botao:{
      //  width:300,
       // height:50,
       // borderRadius:5,
        //marginTop:100,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center',
        width:"100%",
        borderRadius:10,
        paddingVertical:10,
        marginTop:15,
        backgroundColor:"#20b2aa",
        fontSize:12,

        
    },


    botaoAcessar:{
        color:"#fff",
        fontWeight:'bold',
        fontSize:25,
        
     
        

    },
    botaoRegistrar:{
        fontWeight:'bold',
        color:'#fff',
        marginTop:10,
        fontSize:15,
        paddingStart:'5%',
        
        

    },
 

    textoNome:{
        marginTop:20,
        width:300,  
        //backgroundColor:'#20b2aa',
        borderRadius:5,
        fontWeight:'bold',
        fontSize:20,    
        padding:10,
        color:'#fff',
        borderBottomWidth:4,
        height:40,
        marginBottom:12,
        fontSize:20,
        

    }
    
 })








