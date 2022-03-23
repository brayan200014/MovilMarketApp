import React from "react";
import { View ,Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EdicionPerfil from "./componentes/edicionPerfil";
import InformacionApp from "./componentes/informacionApp";
import Perfil from "./componentes/perfil"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab= createBottomTabNavigator();
const HomeStack= createNativeStackNavigator();
const PayStack= createNativeStackNavigator();

const Navigation= () => {
   
    return (
     <HomeStack.Navigator>
       <HomeStack.Screen  name="Perfil de usuario " component={Perfil} 
       options={{headerTransparent: true, 
         headerTintColor:'#fff',
          headerTitle:'Usuario ', 
          headerShown: false,
          headerBackTitle: 'Regresar',
          headerStyle:{
            backgroundColor: '#3EA5DB',
            
            }}} />
       <HomeStack.Screen  name="Configuracion de cuenta" component={EdicionPerfil} 
       options={{headerTransparent: true, 
       headerTintColor:'#fff', 
       headerBackTitle: 'Regresar',
        headerTitle:'Configuracion de cuenta', 
        headerStyle:{
          backgroundColor: '#3EA5DB',
          
          }}} />
          <HomeStack.Screen  name="InfoAPP" component={InformacionApp} 
       options={{headerTransparent: true, 
       headerTintColor:'#fff', 
       headerBackTitle: 'Productos',
        headerTitle: false, 
        headerStyle:{
          backgroundColor: '#3EA5DB',
          
          }}} />
     </HomeStack.Navigator>  
    )
 }
 
 export default Navigation;