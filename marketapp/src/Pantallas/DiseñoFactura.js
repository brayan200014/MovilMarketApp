/*import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Pressable, TouchableWithoutFeedback} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Keyboard } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {AsyncStorage,  useAsyncStorage } from '@react-native-async-storage/async-storage';
const {getItem, setItem} = useAsyncStorage('ProductosArray');
import { useState, useEffect } from 'react';




var formasEntrega = [
    {label: "Delivery       ", value:50},
    {label: "Pick-Up", value:0}
];

let valorFormaEntrega;

const cargarSubtotal = async ()=>{
    const arregloProductos = await getItem();
    const getarray = JSON.parse(arregloProductos);

    if(getarray)
    {
        subtotal = 0;
        for(var i = 0; i < getarray.length; i++)
        {
            subtotal += getarray[i]['Precio'] * getarray[i]['Cantidad'];
        }
    }
    console.log(getarray);
    console.log(subtotal);
}

class Facturar extends Component {
    constructor(props){
        super(props);
        cargarSubtotal();
        console.log(subtotal)
        this.state = {
            
        };
    }

    render(){

        return (

            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View  style={styles.encabezado}> 
                        <View style={styles.elementosEncabezado}>  
                            <Pressable onPress={()=> this.props.navigation.navigate('')}>
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
                                    valorFormaEntrega = value;
                                    console.log(valorFormaEntrega);
                                }}
                                animation={true}
                                labelHorizontal={true}
                                initial={0}
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

                <View style={styles.contenedorDireccion}>
                    <View>
                        <TextInput multiline = {true} numberOfLines = {4} style={styles.textoDireccion}
                            placeholder="Residencial Portal del Bosque 2, Cerca de la UNICAH, Calle principal, casa #1015.">                    
                        </TextInput>
                    </View>
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
                        <Pressable>
                            <Text style={styles.textoPagar}>Pagar</Text>
                        </Pressable> 
                    </View>
                </View>

                
            
            </View>
        ); 
        
    }

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

export default Facturar;*/