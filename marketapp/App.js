import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

//Importanto fuentes
import * as Font from 'expo-font';

//Importando Pantallas
import Onboarding from './src/screen/Onboarding';
import Login from './src/screen/Login';
import ForgetPassword from './src/screen/ForgetPassword';
import Otp from './src/screen/Otp';
import  Email from './src/screen/Email';


//Para las fuentes
const customFonts = {
  'CircularStdBold': require('./assets/fonts/CircularStdBold.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
};



export default function App() {

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  }

  useEffect(()=> {
    _loadAssetsAsync();
  });



  return (
    <View style={styles.container}>
      {assetsLoaded ? <Onboarding/> : <ActivityIndicator size='small'/>} 
    </View>
  );
}
//En el return de arriba es donde llamo a la pantalla que deseo mostrar


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
