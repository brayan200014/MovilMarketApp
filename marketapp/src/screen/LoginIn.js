import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View, Alert, ImageBackground, Dimensions,Image, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';


/*//Para las fuentes
const customFonts = {
  'CircularStdBold': require('./assets/fonts/CircularStdBold.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
};


Importando Pantallas
import Onboarding from './src/screen/Onboarding';
import Login from './src/screen/Login';
import ForgetPassword from './src/screen/ForgetPassword';
import Otp from './src/screen/Otp';
import  Email from './src/screen/Email';*/


const {width, height} = Dimensions.get('window');

//import Input from './src/componentes/Input';
import Button from '../componentes/Button';

const title = '¡Bienvenido(a) de Vuelta!';
const tip = 'Debe Iniciar Sesión para continuar';
const signup = 'Nuevo Usuario? Registrate';
const terms = 'Para registrarse, debe indicar que esta de acuerdo con los términos';


export default function App({navigation}) {

  const [Correo, setCorreo]= useState(null);
  const [Contrasena, setContrasena]= useState(null);
  const presIniciarSesion= async () => {
    console.log(Correo);
    console.log(Contrasena);
      if(!Correo || !Contrasena) {
          console.log("Escriba los datos completos");
          Alert.alert("Estimado","Escriba los datos completos");
      }
      else 
      { 
        try {
              const respuesta= await fetch(
                'http://192.168.0.8:6001/api/autenticacion/iniciosesion',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Correo: Correo,
                        Contrasena: Contrasena
                    })
                }  
              );

              const json = await respuesta.json();
              console.log(json);
              const data= json.data;
              if(!data.token) {
                const token=data.token;
                console.log(token);
                await AsyncStorage.setItem('Token',token);
              }
              Alert.alert("Bienvenido(a)", "Escoge tus Productos");
              navigation.navigate('Root');
          } catch(error) {
              console.log(error);
          }
      }
  }
  const presToken= async ()=> {
    try {
      const token= await AsyncStorage.getItem('Token');
      console.log( token);
      Alert.alert("Supermarket", token);
      
    } catch (error) {
      console.error(error);
    }
  }
  return (
     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardStyle}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/image/background7.png')} style={{width: width, height: height}}>
                <View style={styles.darkLayer}></View>
                <View style={styles.logo}>
                    <Image source={require('../../assets/image/logoMarket.png')}/>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={styles.tip}>
                    <Text style={styles.tipText}>{tip}</Text>
                </View>
                <View style={styles.input}>
            <TextInput style={styles.inputCorreo}
                onChangeText={newText => setCorreo(newText)}
              placeholder="Escriba su correo electrónico">
            </TextInput>

            <TextInput style={styles.inputContra} passwordRules=""
              secureTextEntry={true}
                onChangeText={newText => setContrasena(newText)}
              placeholder="Escriba su contraseña">
            </TextInput>
            
            {/*<TextInput icon={require('./assets/image/iconoEmail.png')}
                onChangeText={newText => setCorreo(newText)}
              placeholder="Escriba su correo electrónico">
            </TextInput>
            <View style={{paddingTop: 18}}></View>
            <TextInput icon={require('./assets/image/passport.png')}
                onChangeText={newText => setContrasena(newText)}
              placeholder="Escriba su contraseña"
              passwordRules=""
              secureTextEntry={true}>
            </TextInput>*/}

          </View>
                <View style={styles.remember}>
                <View style={{}}>
                    <Text style={styles.forgotText}>¿Olvide mi contraseña?</Text>
                </View>
                </View>
                <View style={{marginTop:37, justifyContent:'center', alignItems:'center'}}>
                    <Button text="Login"
                      onPress={presIniciarSesion}
                    />
                </View>
                <View style={styles.signup}>
                    <Text style={styles.signupText}>{signup}</Text>
                </View>
                <View style={styles.terms}>
                    <Text style={styles.termsText}>{terms}</Text>
                </View>
            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView> 
    );
  } 
  const styles = StyleSheet.create({
      keyboardStyle: {
          flex: 1
      },
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width -60,
        height: 45,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    darkLayer:{
        position: 'absolute',
        top:0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#000000',
        opacity: 0.4
    },
    logo:{
        marginTop: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        marginTop: 59,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        color: '#FFFFFF',
        //fontFamily: 'Nunito-ExtraBold',
        fontSize:22
    },
    tip:{
        marginLeft: 70,
        marginRight: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipText:{
        color: '#FFFFFF',
        //fontFamily: 'Nunito-SemiBold',
        fontSize: 17
    },
    input: {
        marginTop: 24,
        marginLeft: 30,
        marginRight:30,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderColor: '#FFFFFF',
        color: '#727C8E',
        //fontFamily: 'Nunito-SemiBold',
        fontWeight: '500',
        fontSize: 12,
        paddingLeft: 0,
        height: 80
    },
    remember:{
        marginTop: 10,
        marginLeft: 30,
        alignItems: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.8
    },
    rememberText:{
        color: '#FFFFFF',
        //fontFamily: 'Nunito-SemiBold',
        fontSize: 12
    },
    forgotText:{
        color: '#FFFFFF',
        //fontFamily: 'Nunito-SemiBold',
        fontSize: 12
    },
    signup:{
        marginTop:113,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        color: '#2A67CA',
        //fontFamily: 'Nunito-SemiBold',
        fontSize: 12
    },
    terms:{
        marginTop: 52,
        marginRight: 80,
        marginLeft: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    termsText:{
        color: '#FFFFFF',
        //fontFamily: 'Nunito-SemiBold',
        fontSize: 10,
        textAlign: 'center'
    },
    inputCorreo: {
        backgroundColor: '#fff', 
        height: 40, 
        paddingLeft:20, 
        paddingRight:20, 
        borderRadius:15,
    },
    inputContra: {
        backgroundColor: '#fff', 
        height: 40, 
        paddingLeft:20, 
        paddingRight:20, 
        marginTop: 7, 
        borderRadius: 15
    }
});