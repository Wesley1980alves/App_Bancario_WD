import { createNativeStackNavigator,useState } from "@react-navigation/native-stack";
import Welcome from "../pagina/Welcome/Index"; 
import login from "../pagina/Login/Index";
import Home from "../componentes/Home";
import Saque from "../componentes/Saque";
import Relatorio from "../componentes/Relatorio";
import Saldo from "../componentes/Saldo";
import Transferencia from "../componentes/Transferencia";
import Depositar from "../componentes/Depositar";
import Desconcetar from "../componentes/Desconectar";


const stack = createNativeStackNavigator(stack);

export default function Rotas(){
    const [balance, setBalance] = useState(0.0);
    const [balance2, setBalance2] = useState(0.0)

    return(
        <stack.Navigator>

            <stack.Screen name='welcome'
            component={Welcome}
            options={{headerShown:false}}/>

        <stack.Screen name='login'
            component={login}
            options={{headerShown:false}}/>

        <stack.Screen name='Home'
            component={Home}
            options={{headerShown:false}}/>

       <stack.Screen name='Saque'
            component={Saque}
            options={{headerShown:false}}/>

   

         <stack.Screen name='Relatorio'
            component={Relatorio}
            options={{headerShown:false}}/> 

        <stack.Screen name="Saldo">
          {props => <Saldo{...props} balance={balance} />}
        </stack.Screen>
     

        <stack.Screen name='Tranferencia'
            component={Transferencia}
            options={{headerShown:false}}/> 

        <stack.Screen name='Depositar'
            component={Depositar}
            options={{headerShown:false}}/> 

        <stack.Screen name='Desconectar'
            component={Desconcetar}
            options={{headerShown:false}}/> 

        

        </stack.Navigator>


    )

}