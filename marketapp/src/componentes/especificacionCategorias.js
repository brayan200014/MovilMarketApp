import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, FlatList,  TextInput, SafeAreaView, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';

export default function DetailsScreen({ navigation }) {
  const [categorias, setcategorias]= useState([]);

  useEffect(async()=>{
    var a = await  consultarCategoria();
  })

  const consultarCategoria= async ()=>{
      try {
        const solicitud= await fetch(
          'http://192.168.0.100:6001/api/categorias/listar/',
          {
            method: 'GET',
            headers: {
              Accept: 'application/json', 
              'Content-Type': 'application/json'
            }
          }
        );
        const json = await solicitud.json();
        console.log(json)
      } catch (error) {
       console.log(error);
      }
 }
 const imprimir= () => {
    console.log("Ho0pl");
 }

    return (
        <View style={styles.containerPrincipal} >


            <View style={styles.containerTitulo}>
              <View style={styles.containerBack}>
                <Pressable onPress={()=> consultarCategoria()}>
                  <Image 
                      style={styles.imagenusuario}
                      source={require('./img/usuario.png')}
                  ></Image></Pressable>
                <Text style={styles.textCarrito}>Hola Josue,</Text>
                <Text style={styles.textCarrito}>Bienvenido</Text>
              </View>
           </View>
           <View style={styles.contenedorbuscar}>
              <TextInput
                placeholder="Que desea comprar"
                style={styles.entradas}>
              </TextInput>
            </View>
            <View style={styles.containerProducto} >
               <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                 
                    <Image 
                    style={styles.imagen}
                    source={require('./img/lacteos.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Lacteos</Text>
               </View>
               <View style={styles.containerImagen}>
               
                    <Image 
                    style={styles.imagen}
                    source={require('./img/bebidas.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Fefrescos</Text>
               </View>
               </View>
           </View>
           <View style={styles.containerProducto} >
               <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                 
                    <Image 
                    style={styles.imagen}
                    source={require('./img/frutas.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Frutas</Text>
               </View>
               <View style={styles.containerImagen}>
                 <Pressable onPress={()=>navigation.navigate('Subcategorias')}>
                 <Text style={styles.textProducto}>Dulces</Text></Pressable>
               </View>
               </View>
           </View>
        </View>

    );
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
    containerPrincipal: {
        width: '100%',
        height: '95%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
containerTitulo : {
    
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    marginTop: '0%'
},
containerBack: {
    backgroundColor: '#3EA5DB', 
    alignItems: 'flex-start',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '6%',
    flexDirection: 'row',
    marginTop:'5%'
    
  },
  textCarrito:{
      fontSize: 20,
      color: '#fff',
      paddingHorizontal: '1%'
      
  },
  contenedorbienvenida:{
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    marginTop: '0%'
  },
  contenedorbuscar:{
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: '0%'
  },

containerProducto: {
    flex: 1, 
    marginLeft: '4%',
    marginRight: '4%',
    padding: -1
},
containerFilaPro: {
    flex:1,
    width: '100%', 
    alignItems: 'center', 
    flexDirection: 'row',
    backgroundColor: '#fff',
},
containerImagen: {
    flex:1, 
    alignItems: 'center',
    backgroundColor: '#B3E5FC',
    justifyContent: 'center',
    borderRadius: 30,
    height: '80%',
    margin:10
},
imagen: {
    margin: 3,
    width: 70,
    height: 70
},
imagenusuario: {
  margin: 3,
  width: 50,
  height: 50
},

item: {
  backgroundColor: '#B3E5FC',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 20,
},
imagen: {
  margin: 0,
  width: 70,
  height: 70,
  alignItems:'center',
},
name:{
  fontSize: 20,
  color: '#000',
  paddingHorizontal: '1%'
},
entradas:{
  flex:1,
  alignItems:"stretch",
  margin:10,
  padding:10,
  fontSize: 20,
  fontWeight:"400",
  color: "#495057",
  backgroundColor:"#fff",
  borderWidth:1,
  borderStyle:"solid",
  borderColor: "#ced4da",
  borderRadius: 15,
  textAlign:'center'
}
})