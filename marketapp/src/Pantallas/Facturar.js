import { StatusBar } from 'expo-status-bar';
//import { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, /*StyleSheet, Text, View */} from 'react-native';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Pressable, TouchableWithoutFeedback} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Keyboard } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {AsyncStorage,  useAsyncStorage } from '@react-native-async-storage/async-storage';
const {getItem, setItem} = useAsyncStorage('ProductosArray');
import { useState, useEffect } from 'react';


import Factura from './DiseñoFactura';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default function App({route, navigation}) {
  
  const {subtotal}=route.params;
  var idSucursal = -1;
  let metodoPago = 0;
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [valorFormaEntrega, setvalorFormaEntrega] = useState(null);

  var formasEntrega = [
    {label: "Delivery       ", value:50},
    {label: "Pick-Up", value:0}
  ];


  const _loadAssetsAsync = async () =>{
    setAssetsLoaded(true);
  }

  useEffect(()=>{
    _loadAssetsAsync();
  });

  const vaciarCarrito = async () =>{
      const arrayProductos = await getItem();
      const obtenerArreglo = JSON.parse(arrayProductos);

      for(var i=0; i<obtenerArreglo.length; i++)
      {
          obtenerArreglo.splice(i, 1);
      }
      
      await setItem(JSON.stringify(obtenerArreglo));
  }

  const cargarDireccionSucursal = ()=>{
        if(valorFormaEntrega == 50){
            idSucursal = 4;
            console.log(idSucursal)
          return(
            <View style={styles.contenedorDireccion}>
                    <View>
                        <TextInput multiline = {true} numberOfLines = {4} style={styles.textoDireccion}
                            placeholder="Residencial Portal del Bosque 2, Cerca de la UNICAH, Calle principal, casa #1015.">                    
                        </TextInput>
                    </View>
            </View>
          )
        }
        else if(valorFormaEntrega == 0){
            return(
                <View style={styles.contenedorCombo}>
                    <View style={styles.elementoCombo}>
                        <SelectDropdown
                            data={["Sucursal Tegucigalpa", "Sucursal Comayaguela"]}
                            onSelect={(selectedItem, index) =>{
                                console.log(selectedItem, index)
                                if(index == 0){
                                    idSucursal = 3
                                }
                                else if(index == 1){
                                    idSucursal = 5
                                }
                                console.log(idSucursal)
                            }}
                            buttonTextAfterSelection = {(selectedItem, index) =>{
                                return selectedItem
                            }}
                            rowTextForSelection = {(item, index) =>{
                                return item
                            }} 
                        />
                    </View>
                </View>
            )
        }
  }

  const pressPagar = async () => {
    const fecha = new Date()
    const ano = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    var fechaVenta;
    if(mes < 10)
    {
        fechaVenta = ano + '-' + '0' + mes + '-' + hoy;
    }


    if(valorFormaEntrega == null)
    {
      Alert.alert("Datos Incompletos", "Por favor seleccione un metodo de entrega")
    }
    else if(idSucursal == -1)
    {
        Alert.alert("Datos Incompletos", "Por favor Seleccione una sucursal");
    }
    else if(metodoPago == 0)
    {
        Alert.alert("Datos Incompletos", "Por favor Seleccione un metodo de Pago.")
    }
    else{
      console.log(subtotal);
      console.log(valorFormaEntrega);
      console.log((subtotal + valorFormaEntrega)*0.15);
      console.log((subtotal + valorFormaEntrega + ((subtotal + valorFormaEntrega)*0.15)));
      console.log(fechaVenta);
    
      try {
        const respuestaPeticion = await fetch(
          'http://192.168.0.11:6001/api/ventas/guardar',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              FechaVenta: fechaVenta,
              Subtotal: subtotal,
              ISV: (subtotal + valorFormaEntrega)*0.15,
              IdUsuarioCliente: 3,
              IdSucursal: idSucursal
            })
          }
        );

        const json = await respuestaPeticion.json();
        console.log(json);

      }
      catch (error){
        console.log(error);
      }

      try{
            const arregloProductos = await getItem();
            const getarray = JSON.parse(arregloProductos);

            if(getarray)
            {
                for(var i = 0; i < getarray.length; i++)
                {
                    var Cantidad = getarray[i]['Cantidad'];
                    var Precio = getarray[i]['Precio'];
                    var IdProducto = getarray[i]['IdProducto'];
                    console.log(Cantidad + ' ' +  Precio + ' ' + IdProducto);

                    const respuestaDetalle = await fetch(
                    'http://192.168.0.11:6001/api/ventas/guardarDetalle',
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                        Cantidad: Cantidad,
                        Precio: Precio,
                        IdProducto: IdProducto
                        })
                    }
                    );
                    const jsonDetalle = await respuestaDetalle.json();
                    console.log(jsonDetalle);
                    if(!jsonDetalle)
                    {
                        Alert.alert("Error", "Error al Ingresar el Detalle de su Compra");
                    }
                }
                Alert.alert("Mensaje","Compra Realizada Exitosamente");
                setvalorFormaEntrega(null);
                vaciarCarrito();
                navigation.navigate("RootDetail");
                navigation.navigate("RootProductos");
                
            }
        }
        catch (error)
        {
            console.log(error);
        }

    }

  }
  
  return (
    <SafeAreaView style = {{flex: 1}}>
       <View style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View  style={styles.encabezado}> 
                        <View style={styles.elementosEncabezado}>  
                            <Pressable onPress={()=> navigation.navigate('')}>
                                <AntDesign name="arrowleft" size={24} color="white" />
                            </Pressable>             
                            <Text style = {styles.textoEncabezado}> 
                                Pagar Orden
                            </Text>
                        </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.contenedorRadioButton}>
                        <View style={styles.elementoRadioButton}>
                            <RadioForm
                                radio_props = {formasEntrega}
                                onPress={(value)=>{
                                    setvalorFormaEntrega(value);
                                }}
                                animation={true}
                                labelHorizontal={true}
                                initial={-1}
                                formHorizontal={true}
                                style = {styles.radioButtons}
                            />
                        </View>
                    </View>   
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.contenedorResumenPagar}>
                        <View>
                            <Text style={styles.textoResumenPagar}>
                                {"Subtotal ................. L. " + subtotal}
                            </Text>
                            <Text style={styles.textoResumenPagar}>
                                {"Delivery ................. L. " + valorFormaEntrega}
                            </Text>
                            <Text style={styles.textoResumenPagar}>
                                {"ISV ......................... L. " + (subtotal + valorFormaEntrega)*0.15}
                            </Text>
                            <Text style={styles.textoResumenPagar}>
                                {"Total ....................... L. " + (subtotal + valorFormaEntrega + ((subtotal + valorFormaEntrega)*0.15))}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.contenedorTituloSecundario}>
                        <Text style={styles.textoTituloSecundario}>
                            Direccion
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <View>
                    {cargarDireccionSucursal()}
                </View>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.contenedorTituloSecundario}>
                        <Text style={styles.textoTituloSecundario}>
                            Instrucciones de Entrega
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.contenedorInstrucciones}>
                    <View>
                        <TextInput multiline = {true} numberOfLines = {4} style={styles.textoDireccion}
                            placeholder="Ejemplo: Tocar el Timbre.">                    
                        </TextInput>
                    </View>
                </View>

                <View style={styles.contenedorCombo}>
                    <View style={styles.elementoCombo}>
                        <SelectDropdown
                            data={["Efectivo", "Tarjeta"]}
                            onSelect={(selectedItem, index) =>{
                                console.log(selectedItem, index)
                                if(index == 0 || index == 1)
                                {
                                    metodoPago = 1;
                                }
                            }}
                            buttonTextAfterSelection = {(selectedItem, index) =>{
                                return selectedItem
                            }}
                            rowTextForSelection = {(item, index) =>{
                                return item
                            }} 
                        />
                        <Text style={styles.textoCombo} >
                            {"L. " + (subtotal + valorFormaEntrega + ((subtotal + valorFormaEntrega)*0.15))}
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={styles.ContenedorBotonPagar}>
                        <Pressable onPress={pressPagar}>
                            <Text style={styles.textoPagar}>Pagar</Text>
                        </Pressable> 
                    </View>
                </View>

                
            
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    width: '100%',
    height: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: '-3%'
  },
  elementosEncabezado:{
      alignItems: "flex-start",
      alignItems: "center",
      flexDirection:"row",
      height:"100%",
      justifyContent:"center",
      marginTop:"5%",
      marginLeft: "6%",
      color: "#fff",
  },
  container: {
      width: "100%",
      height: "95%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  textoEncabezado: {
      fontSize: 20,
      color: '#fff',
      paddingHorizontal: '1%'  
  },
  contenedorRadioButton: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      width: '100%',
      height: 80,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop: '0%'
  },
  elementosRadioButton:{
      alignItems: "flex-start",
      alignItems: "center",
      flexDirection:"row",
      height:"100%",
      justifyContent:"center",
      marginTop:"5%",
      marginLeft: "6%",
      color: "#fff",
  },
  radioButtons:{
      alignItems: 'center',
      marginLeft: "30%"
  },
  contenedorResumenPagar: {
      flexDirection: 'row',
      backgroundColor: '#FAF0E8',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      height: 130,
      borderRadius: 30,
      marginTop: '-10%',
      padding: '4%'   
  },
  textoResumenPagar:{
      fontSize: 20,
      color: '#000',
      
  },
  contenedorDireccion: {
      flexDirection: 'row',
      backgroundColor: '#FAF0E8',
      alignItems: 'flex-start',
      width: '90%',
      height: 100,
      borderRadius: 30,
      marginTop: '1%',
      padding: '4%'   
  },
  textoDireccion:{
      fontSize: 18,
      color: '#000',
      textAlign: 'justify'
      
  },
  contenedorTituloSecundario:{
      marginTop: "2%"

  },
  textoTituloSecundario:{
      fontSize: 22,
      color: '#3EA5DB',
  },
  contenedorInstrucciones:{
      flexDirection: 'row',
      backgroundColor: '#FAF0E8',
      alignItems: 'flex-start',
      width: '90%',
      height: 100,
      borderRadius: 30,
      marginTop: '1%',
      padding: '4%'  
  },
  textoCombo:{
      marginLeft: "15%",
      fontSize: 22
  },
  contenedorCombo:{
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: '100%',
      height: 90,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop: '-5%'
  },
  elementoCombo:{
      alignItems: "flex-start",
      alignItems: "center",
      flexDirection:"row",
      height:"100%",
      justifyContent:"center",
      marginTop:"5%",
      marginLeft: "6%",
      color: "#fff",
  },
  textoPagar:{
      fontSize: 22,
      color: '#fff',
      marginTop: "20%",
      padding: 20,
      marginTop: "-15%"
  },
  ContenedorBotonPagar: { 
    backgroundColor: '#3EA5DB',
    width: '160%',
    height: 40,
    borderRadius: 10,
    marginTop: '5%'
  }, 

});

