import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Pantalla from './src/componentes/especificacionProducto';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/Nav'
import NavigatorPrincipal from "./src/NavigatorPrincipal";
import NavigatiorDetails from "./src/NavigatorDetails";
export default function App() {
    
  return (
  
  <NavigationContainer>
  <Nav/>
  </NavigationContainer>
  );
}

  useEffect(() =>{
    _loadAssetsAsync();
  });

  return(
    <NavigationContainer>
    <NavigatorPrincipal/>
  </NavigationContainer>
  )

}
