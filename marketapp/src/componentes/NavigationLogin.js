import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./componentes/Details";
import SettingsScreen from "./componentes/Settings";
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from "./componentes/Root";
import Especificacion from "./componentes/especificacionProducto";
import Prueba from "./componentes/prueba";
import OnBoarding from "../screen/Onboarding";
import Login from "../screen/LoginIn";
import RootLogin from "./componentes/RootLogin";
import Email from "../screen/Email";
import RegistroUsuario from "../screen/RegistroUsuario";
import CambioContra from "../screen/Otp"




const Tab= createBottomTabNavigator();
const HomeStack= createNativeStackNavigator();
const PayStack= createNativeStackNavigator();

const Navigation= () => {
   
   return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen  name="Email" component={Email} options={{headerTransparent: true, headerTintColor:'#fff', headerBackTitle: 'Regresar'}} />
      <HomeStack.Screen  name="CambioContra" component={CambioContra} options={{headerTransparent: true, headerTintColor:'#fff', headerBackTitle: 'Regresar'}} />
      <HomeStack.Screen  name="RegistroUsuario" component={RegistroUsuario} options={{headerTransparent: true, headerTintColor:'#fff', headerBackTitle: 'Regresar'}} />
    </HomeStack.Navigator>  
   )
}

export default Navigation;