import React, { Component } from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Share from 'react-native-share';
import { useNavigation} from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useEffect } from 'react';
    
export default function PerfilUsuario({ navigation }) {


    useEffect( async ()=>{
      await getCorreo();
      console.log(Correo)
    });

    const [nombreuser, setuser]= useState(null);
    const [iduser, setid]= useState(null);
    const [Correo, setCorreo]= useState(null);
    const [fecha, setfecha]= useState(null);

    const getCorreo = async ()=> {
      const correo= await AsyncStorage.getItem("correo")
      setCorreo(correo);

    }

    const[usuarios, setUsuarios]= useState([])
     useEffect(async() =>{
       var a = await consultarUsuarios();
     })

     const consultarUsuarios= async ()=>{
      try {
        const solicitud= await fetch(
          'http://192.168.1.5:5001/api/cliente/buscar',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json', 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Correo: Correo
              })

          }
        );
        const json = await solicitud.json();

        setuser(json.NombreUsuario);
        console.log(nombreuser);
        setid(json.IdUsuarioCliente);
        console.log(iduser);
        setfecha(json.FechaCreacion);
        
      } catch (error) {
       console.log(error);
      }
 }

    return (
      <SafeAreaView style={styles.container}>
         <View style={styles.containerBack}>
              <Text style={styles.textCarrito}>Perfil</Text>
            </View>

        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {
                marginTop: 25,
                marginBottom: 5,
              }]}>{nombreuser}</Title>
              <Caption style={styles.caption}>ID#{iduser}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="email" color="#3EA5DB" size={30} />
            <Text style={{ color: "#0b0a09", marginLeft: 20, fontSize: 15 }}>{Correo}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="cellphone-arrow-down" color="#3EA5DB" size={30} />
            <Text style={{ color: "#0b0a09", marginLeft: 20, fontSize: 15 }}>Creado: {fecha}</Text>
          </View>

        </View>

        <View style={styles.infoBoxWrapper}>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() =>navigation.navigate("Configuracion de cuenta")}>
            <View style={styles.menuItem}>
              <Icon name="account-edit" color="#3EA5DB" size={30} />
              <Text style={styles.menuItemText}>Editar Perfil</Text>
            </View>
          </TouchableRipple>
          <View style={styles.conteInfo}>
            <Text style={styles.info}>Edita tu perfil</Text>
          </View>
          <TouchableRipple onPress={() =>navigation.navigate("InfoAPP")}>
            <View style={styles.menuItem}>
              <Icon name="information" color="#3EA5DB" size={30} />
              <Text style={styles.menuItemText}>Información</Text>
            </View>
          </TouchableRipple>
          <View style={styles.conteInfo}>
            <Text style={styles.info}>Información sobre aplicación</Text>
          </View>
          <TouchableRipple onPress={()  =>navigation.navigate("Ingresar targeta")}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#3EA5DB" size={30} />
              <Text style={styles.menuItemText}>Métodos de pago</Text>
            </View>
          </TouchableRipple>
          <View style={styles.conteInfo}>
            <Text style={styles.info}>Gestiona metodos de pago</Text>
          </View>
          <TouchableRipple onPress={() =>navigation.navigate("Inicio")}>
            <View style={styles.menuItem}>
              <Icon name="close-box" color="#3EA5DB" size={30} />
              <Text style={styles.menuItemText}>Cerrar sesión</Text>
            </View>
          </TouchableRipple>
          <View style={styles.conteInfo}>
            <Text style={styles.info}>Salir de la APP</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    textCarrito:{
      fontSize: 20,
      color: '#fff',
     marginTop:8,
      paddingHorizontal: '1%',
      
  },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    caption: {
      marginTop:10,
      fontSize: 15,
      lineHeight: 14,
      fontWeight: '500',
    },
    containerBack: {
      backgroundColor: '#3EA5DB', 
      height: '7%',
      alignItems: 'center',
      marginTop:'10%',
      borderWidth:2,
      borderColor:'#828282'
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
     borderTopColor: '#828282',
      borderTopWidth: 30,
      flexDirection: 'row',
      height: 10,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 30,
    },
    info: {
      paddingHorizontal: 80,
      color:'#59a0e1'
    },
    menuItemText: {
      color: '#0b0a09',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 26,
    },
    conteInfo:{
      backgroundColor:'#eeeeee',
      height:40,
      //alignItems:'center',
      justifyContent: 'center',
    }
  });