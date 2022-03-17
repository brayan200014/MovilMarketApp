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
import Facturar from "./Pantallas/Facturar";




const Tab= createBottomTabNavigator();
const HomeStack= createNativeStackNavigator();
const PayStack= createNativeStackNavigator();

const Navigation= () => {
   
   return (
    <HomeStack.Navigator>
      <HomeStack.Screen  name="RootDetail" component={DetailsScreen} 
      options={{headerTransparent: true, 
        headerTintColor:'#fff',
         headerTitle:'Carrito', 
         headerStyle:{
           backgroundColor: '#3EA5DB',
           
           }}} />
      <HomeStack.Screen  name="Factura" component={Facturar} 
      options={{headerTransparent: true, 
      headerTintColor:'#fff', 
      headerBackTitle: 'Carrito',
       headerTitle:'Pagar', 
       headerStyle:{
         backgroundColor: '#3EA5DB',
         
         }}} />
    </HomeStack.Navigator>  
   )
}

export default Navigation;