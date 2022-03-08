import React, { Component } from 'react';
import {
  StyleSheet, Text,View,Image,Button ,TouchableOpacity
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      
        <View style={styles.container}>
          <View style={styles.containerTitulo}>
           </View>
          <View style={styles.header}>
          <Text style={styles.textCarrito}>Mi Perfil</Text>
            </View>
          <Image style={styles.avatar} source={{uri: 'https://cdn-icons-png.flaticon.com/512/147/147140.png'}}/>
          <View style={styles.body}>
          <Text style={styles.name}>nombre del usuario</Text>
              <Text style={styles.info}>email del usuario</Text>
              <Text style={styles.description}>Opciones de perfil:</Text>

             <View style={styles.bodyContent}>
             
              <TouchableOpacity style={styles.buttones}>
              <Button title="Editar perfil">editar</Button>
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttones}>
              <Button title="Metodos de pago"></Button>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttones}>
              <Button title="Informacion"></Button>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cerrars}>
              <Button title="Cerrar"></Button>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#3ea5db",
    height:200,
  },
  buttones:{
    backgroundColor: "#3ea5db",
    width:500,
    height: 60,
    borderRadius:30,
    margin:10
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:160
  },
  cerrars:{
    marginTop:60,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    width:500,
    backgroundColor: "#cccccc",
    fontSize: 40,
    borderRadius:30
  },
  name:{
    fontSize:22,
    textAlign: 'center',
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:20,
  },
  bodyContent: {
  
    alignItems: 'center',
    padding:30,
  },
  name:{
    marginTop:20,
    textAlign: 'center',
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    textAlign: 'center',
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:20,
    color: "#696969",
    marginTop:40,
  },
  buttonContainer: {
    fontSize: 20,
    marginTop:10,
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:500,
    backgroundColor: "#cccccc"
  },
  textCarrito:{
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: '40%',
},
containerTitulo : {
  backgroundColor: '#3EA5DB',
  alignItems: 'flex-start',
  flexDirection: 'row',
  height: 80,
  width: '100%',
  marginTop: '0%'
},

});

    
  


