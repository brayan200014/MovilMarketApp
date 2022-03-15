import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./componentes/Details";
import SettingsScreen from "./componentes/Settings";
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from "./componentes/Root";
import Especificacion from "./componentes/especificacionProducto";
import Prueba from "./componentes/prueba";
import OnBoarding from "./screen/Onboarding";
import Login from "./screen/LoginIn"




const Tab= createBottomTabNavigator();
const HomeStack= createNativeStackNavigator();
const PayStack= createNativeStackNavigator();

const Navigation= () => {
   
   return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={OnBoarding}  options={{headerShown:false}} />
      <HomeStack.Screen  name="Login" component={Login} options={{headerTransparent: true, headerTintColor:'#fff', headerBackTitle: 'Regresar'}} />
      <HomeStack.Screen  name="Root" component={Root} options={{headerShown:false}} />
    </HomeStack.Navigator>  
   )
}

export default Navigation;