import React, { Component } from "react";
import { StyleSheet, View, Switch,TouchableOpacity } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.4.1
import { RadioButton, Text } from 'react-native-paper';


const MyComponent = () => {
  const [value, setValue] = React.useState('first');
  return (
    <View>
      <View style={styles.seccion}>
      <View> 
      <Text style={styles.name}>Seleccione tipo de pago</Text>
      </View>
      </View>
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{marginTop:30,marginLeft:10}}>
        <Text style={{fontSize:20}}>Tarjeta de debito</Text>
        <RadioButton value="first" />
        <LiteCreditCardInput />
      </View>
      <View style={{marginTop:30,marginLeft:10}}>
        <Text style={{fontSize:20}}>Pagar al recibir</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
    <TouchableOpacity style={styles.commandButton}>
          <Text style={styles.panelButtonTitle}>Guardar cambios</Text>
        </TouchableOpacity>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  name:{
      color:"#FFFFFF",
      fontSize:18,
      marginLeft:20
  },
  seccion:{
    backgroundColor: "#2874A6",
    height:50,
    width:300,
    justifyContent:'center',
    marginTop:120,
    borderColor:'#828282',
    borderWidth:2
  },
  commandButton: {
    justifyContent:'center',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#2874A6',
    alignItems: 'center',
    marginTop: 90,
    marginLeft:20,
    marginRight:20,
    borderWidth:2,
    borderColor:'#828282'
  },
  panelButtonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});