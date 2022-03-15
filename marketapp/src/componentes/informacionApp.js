import React, { Component } from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';


export default class Infor extends Component  {

  render(){
    return(
      <View>
        <View style={styles.mainContainer}>
          <Text style={styles.textTitulo}>Información</Text>
      </View>
      <View style={styles.contorno}>

      <Text style={styles.textStyle}>Super Mercado 1801</Text>
      <Image style={styles.logo}
      source={require('../../assets/prueba.jpg')} />
       <Text style={styles.principal}>La idea de creación del supermercado surgio ante las necesidades de los consumidores de realizar sus compras de manera rapida, comoda y economica y segura, utilizando las herramientas tecnológicas de la actualidad para dar satisfaccion a los consumidores. SUPERMERCADO 1801 su objetivo es mejorar y simplificar los procesos de pedidos, entregas, promociones, orden y servicio al usuario, cubrir una necesidad de forma inmediata y segura, proporcionando una buena experiencia al usuario durante su compra.</Text>
      </View>
      </View>
    
    );
  }
}
const styles = StyleSheet.create({
contorno:{
backgroundColor:'#F2D7EF',
marginTop:10,
marginLeft:15,
marginRight:15,
borderRadius:30,
borderWidth: 2,
shadowColor: '#480000',
shadowOffset: {width: 0, height: 2},
shadowOpacity: 0.5,
elevation: 5
},
  principal:{
    color:'#091114',
    padding: 30,
    fontSize: 17,
    margin: 15,
    textAlign:'justify'
  },
  mainContainer:{
    marginTop:10,
    backgroundColor:'#3EA5DB',
    height: 40,
    borderRadius:15
  },
  textStyle:{
    color:'#091114',
    padding: 20,
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold'
  },
  textTitulo:{
    color:'#f5ffed',
    fontSize: 17,
    textAlign:'center',
    padding:5,
  },
  logo: {
    width: 400,
    height: 150,
    resizeMode:'contain',
    justifyContent: 'center',
  }
});