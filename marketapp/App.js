import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Factura from './src/Pantallas/Facturar';

export default function App() {
  
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const _loadAssetsAsync = async () =>{
    setAssetsLoaded(true);
  }

  useEffect(()=>{
    _loadAssetsAsync();
  });
  
  return (
    <SafeAreaView style = {{flex: 1}}>
       <Factura />
    </SafeAreaView>
    
  );
}

