import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';

export default function DetailsScreen({ navigation }) {

  const categoriasURL="http://192.168.0.100:6001/api/categorias/listar/"
  const [categorias, setcategorias]= useState([]);
  const cargar=async()=>{
    await fetch(categoriasURL).then((response)=>response.json())
    .then((json)=>{
      setcategorias(json.categorias);
    })
  }
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
        )
        
        const json = await solicitud.json()
        return(json[0].categorias)
        cargar();
        
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
                <Pressable onPress={()=> consultarCategoria}>
              <Image 
                      style={styles.imagenusuario}
                      source={require('./img/usuario.png')}
                  ></Image></Pressable>
                <Text style={styles.textCarrito}>Hola Gabriela,</Text>
                <Text style={styles.textCarrito}>Bienvenida</Text>
              </View>
           </View>

          <ScrollView>
            {
              people.map(item =>(
              <View key={item.IdCategoria}>
                <Text style={styles.item}>{item.NombreCategoria}</Text>
              </View>
              ))
            }
          </ScrollView>

        </View>
    );
}

const styles= StyleSheet.create({
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
    backgroundColor: '#FAF0E8',
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

item:{
  backgroundColor: '#B3E5FC',
  marginTop: 24,
  padding:30,
  fontSize:24,
  marginHorizontal:10,
  marginTop: 24,
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
}

})