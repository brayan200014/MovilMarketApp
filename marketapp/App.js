import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pantalla from './src/componentes/especificacionProducto';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/Nav'
import NavigatorPrincipal from "./src/NavigatorPrincipal"

export default function App() {
  return (
   <NavigationContainer>
     <NavigatorPrincipal/>
   </NavigationContainer>
  );
}


