import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pagina/Login/Index';
import Welcome from './src/pagina/Welcome/Index';
import Depositar from './src/componentes/Depositar';
import Desconcetar from './src/componentes/Desconectar';
import Home from './src/componentes/Home';
import Relatorio from './src/componentes/Relatorio';
import Saldo from './src/componentes/Saldo';
import WithdrawScreen from './src/componentes/Saque';
import Transferencia from './src/componentes/Transferencia';


const Stack = createNativeStackNavigator();

function App() {
  const [balance, setBalance] = useState(0.0);
  const [balance2, setBalance2] = useState(0.0)

  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
    
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Saldo">
          {props => <Saldo {...props} balance={balance} />}
        </Stack.Screen>
        <Stack.Screen name="Saque">
          {props => ( <Saque {...props} balance={balance} setBalance={setBalance} /> )}
        </Stack.Screen>
        <Stack.Screen name="Depositar">
          {props => ( <Depositar {...props} balance={balance} setBalance={setBalance} /> )}
        </Stack.Screen>
        <Stack.Screen name="Relatorio">
          {props => ( <Relatorio {...props} balance={balance} balance2={balance2} /> )}
        </Stack.Screen>
        <Stack.Screen name="Transferencia">
          {(props) => (
            <Transferencia
              {...props}
              balance={balance}
              setBalance={setBalance}
              balance2={balance2}
              setBalance2={setBalance2} /> )}
        </Stack.Screen>
        <Stack.Screen name="Desconectar" component={Desconcetar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




/*

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000',
    
    
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


},

telaInicial:{
  marginTop:20,
  fontSize:20,
  
},
botaoInicial:{
  width:300,
  height:50,
  backgroundColor:"#fff",
  borderRadius:5,
  marginTop:20,
  alignItems:"center",
  justifyContent:"center",
  

},
botaoEntrar:{
  fontSize:30,
  color:'#000',


}



});*/