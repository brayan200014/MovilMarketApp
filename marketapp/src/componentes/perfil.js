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
class PerfilUsuario extends Component {

  
    render() {  
        //console.log(token)
        //const ejemplo =AsyncStorage.getItem('presIniciarSesion');
        //console.log(ejemplo)
    //const navigation = useNavigation(); 

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
              }]}>Nombre Perfil</Title>
              <Caption style={styles.caption}>nombre usuario</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="phone" color="#3EA5DB" size={30} />
            <Text style={{ color: "#0b0a09", marginLeft: 20, fontSize: 15 }}>telefono usuario</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#3EA5DB" size={30} />
            <Text style={{ color: "#0b0a09", marginLeft: 20, fontSize: 15 }}>usuarioscliente.Correo</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => this.props.navigation.navigate("Configuracion de cuenta")}>
            <View style={styles.menuItem}>
              <Icon name="account-edit" color="#3EA5DB" size={30} />
              <Text style={styles.menuItemText}>Editar Perfil</Text>
            </View>
          </TouchableRipple>
          <View style={styles.conteInfo}>
            <Text style={styles.info}>Edita tu perfil</Text>
          </View>
          <TouchableRipple onPress={() => this.props.navigation.navigate("InfoAPP")}>
            <View style={styles.menuItem}>
              <Icon name="information" color="#3EA5DB" size={30} />
              <Text style={styles.menuItemText}>Información</Text>
            </View>
          </TouchableRipple>
          <View style={styles.conteInfo}>
            <Text style={styles.info}>Información sobre aplicación</Text>
          </View>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#3EA5DB" size={30} />
              <Text style={styles.menuItemText}>Métodos de pago</Text>
            </View>
          </TouchableRipple>
          <View style={styles.conteInfo}>
            <Text style={styles.info}>Gestiona metodos de pago</Text>
          </View>
          <TouchableRipple onPress={() => this.props.navigation.navigate("Inicio")}>
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
}
  export default PerfilUsuario;

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
      fontSize: 14,
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
     borderTopColor: '#3EA5DB',
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