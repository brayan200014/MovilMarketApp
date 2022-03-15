import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Share from 'react-native-share';

const perfilUsuario = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 80}}>
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:25,
              marginBottom: 5,
            }]}>Nombre Perfil</Title>
            <Caption style={styles.caption}>nombre usuario</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="phone" color="#3EA5DB" size={30}/>
          <Text style={{color:"#0b0a09", marginLeft: 20,fontSize:15}}>telefono usuario</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#3EA5DB" size={30}/>
          <Text style={{color:"#0b0a09", marginLeft: 20, fontSize:15}}>email usuario</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
      </View>

      <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() =>{}}>
          <View style={styles.menuItem}>
            <Icon name="account-edit" color="#3EA5DB" size={30}/>
            <Text style={styles.menuItemText}>Editar Perfil</Text>
          </View>
        </TouchableRipple>
        <View style={styles.conteInfo}>
            <Text style={styles.info}>Edita tu perfil</Text>
          </View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="information" color="#3EA5DB" size={30}/>
            <Text style={styles.menuItemText}>Información</Text>
          </View>
        </TouchableRipple>
        <View style={styles.conteInfo}>
            <Text style={styles.info}>Información sobre aplicación</Text>
          </View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#3EA5DB" size={30}/>
            <Text style={styles.menuItemText}>Métodos de pago</Text>
          </View>
        </TouchableRipple>
        <View style={styles.conteInfo}>
            <Text style={styles.info}>Gestiona metodos de pago</Text>
          </View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="close-box" color="#3EA5DB" size={30}/>
            <Text style={styles.menuItemText}>Cerrar sesión</Text>
          </View>
        </TouchableRipple>
        <View style={styles.conteInfo}>
            <Text style={styles.info}>Salir de la APP</Text>
          </View>
      </View>
    </SafeAreaView>
  );

};
  export default perfilUsuario;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
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