import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Pantalla from './src/componentes/especificacionProducto';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/Nav'
import NavigatorPrincipal from "./src/NavigatorPrincipal";
import NavigatiorDetails from "./src/NavigatorDetails";



import * as Font from 'expo-font';


//Para fuentes
const customFonts = {
  'CircularStdBold': require('./assets/fonts/CircularStdBold.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
};

export default function App() {
  
  //Para cargar las fuentes
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  }

  useEffect(() =>{
    _loadAssetsAsync();
  });

 return (
    <NavigationContainer>
      <NavigatorPrincipal/>
    </NavigationContainer>
  );


}
