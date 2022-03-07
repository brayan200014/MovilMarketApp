import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pantalla from './src/componentes/especificacionProducto';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/Nav'

export default function App() {
  return (
   <NavigationContainer>
     <Nav/>
   </NavigationContainer>
  );
}


