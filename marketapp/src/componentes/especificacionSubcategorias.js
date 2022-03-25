import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, DrawerLayoutAndroidBase, FlatList, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';

export default function DetailsScreen({ navigation }) {

  const[productos,setproductos]=useState([]);

  useEffect(async()=>{
    var a = await  consultarproducto();
  })

  const consultarproducto=async()=>{
    try {
      const solicitud= await fetch(
        'http://192.168.0.13:6001/api/productos/listarproductos',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json', 
            'Content-Type': 'application/json'
          }
        }
      );
      const json = await solicitud.json();
      console.log(json);

    } catch (error) {
     console.log(error);
    }
  }

  

    const imprimir= () => {
        console.log("Press")
    }

    return (
      <View style={styles.containerPrincipal} >
        <View style={styles.containerTitulo}>
          <View style={styles.containerBack}>
            <Pressable onPress={() => consultarproducto()} >
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
            <Text style={styles.textinicio}>Bebidas y Jugos</Text>
          </View>
        </View>
        <View style={styles.containerProducto}>
          <View style={styles.containerFilaPro}>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./banana.png')}></Image>
               <View style={styles.containerInfo}>
               
               <Text style={styles.textProducto}>Bananas</Text>
                <Text style={styles.textPrecio}>L 35.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> navigation.navigate('Productos', {ProductoId: 1, ProductoNombre: "Bananas",PrecioProducto: 35})}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/coca.png')}></Image>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Coca-Cola</Text>
                <Text style={styles.textPrecio}>L 20.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> navigation.navigate('Productos', {ProductoId: 2, ProductoNombre: "Coca Cola",PrecioProducto: 20})}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerProducto}>
          <View style={styles.containerFilaPro}>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/nutella.png')}></Image>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Nutella</Text>
                <Text style={styles.textPrecio}>L 50.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> navigation.navigate('Productos', {ProductoId: 3, ProductoNombre: "Nutella",PrecioProducto: 50})}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginBottom: '10%'}}></View>
      </View>
    );
}

const styles= StyleSheet.create({
    containerPrincipal: {
        width: '100%',
        height: '100%',
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
  margin:10,
  paddingBottom:-30
},
imagen: {
  margin: 3,
  width: 70,
  height: 70
},
containerInfo: {
    paddingBottom:-30,
    flex:1, 
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    height: '80%',
    marginLeft: '2%',
    textAlign:'left',
},
textProducto: {
    fontSize: 18,
    color: '#000',
    margin: '0%', 
},
textPrecio: {
    fontSize: 12,
    color: '#000',
    margin: '0%', 
    textAlign:'left',
},
textpeso: {
    fontSize: 12,
    color: '#000',
},
containerCantidadElegida: {
    flex: 1, 
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom:-30,
  },
})