import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./componentes/Details";
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from "./componentes/Root";
import EspecificacionProductos from "./componentes/especificacionProducto";
import Prueba from "./componentes/prueba";
import OnBoarding from "./screen/Onboarding";
import Login from "./screen/LoginIn"
import Facturar from "./Pantallas/Facturar";
import EspecificacionCategorias from "./componentes/especificacionCategorias";
import EspecificacionSubcat from "./componentes/especificacionSubcategorias";




const Tab= createBottomTabNavigator();
const HomeStack= createNativeStackNavigator();
const PayStack= createNativeStackNavigator();

const Navigation= () => {
   
   return (
    <HomeStack.Navigator>
      <HomeStack.Screen  name="RootProductos" component={EspecificacionCategorias} 
      options={{headerTransparent: true, 
        headerTintColor:'#fff',
         headerTitle:'Carrito', 
         headerShown: false,
         headerBackTitle: 'Regresar',
         headerStyle:{
           backgroundColor: '#3EA5DB',
           
           }}} />
      <HomeStack.Screen  name="Subcategorias" component={EspecificacionSubcat} 
      options={{headerTransparent: true, 
      headerTintColor:'#fff', 
      headerBackTitle: 'Regresar',
       headerTitle:'Subcategorias', 
       headerStyle:{
         backgroundColor: '#3EA5DB',
         
         }}} />
         <HomeStack.Screen  name="Productos" component={EspecificacionProductos} 
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