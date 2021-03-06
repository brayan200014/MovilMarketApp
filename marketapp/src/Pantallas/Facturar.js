import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Pressable, TouchableWithoutFeedback} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Keyboard } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

var formasEntrega = [
    {label: "Delivery       ", value:"Delivery"},
    {label: "Pick-Up", value:"Pick-Up"}
];

class Facturar extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    

    render(){

        return (
            
            <View style={styles.container}>
            
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View  style={styles.encabezado}> 
                        <View style={styles.elementosEncabezado}>  
                            <Pressable onPress={()=>Alert.alert("Regresando", "Regresando al Carrito de Productos...")}>
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
                                onPress={(value)=>{}}
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
                                Subtotal ............................. L.  80.50
                            </Text>
                            <Text style={styles.textoResumenPagar}>
                                Delivery ............................. L.   50.00
                            </Text>
                            <Text style={styles.textoResumenPagar}>
                                ISV ...................................... L.   27.50
                            </Text>
                            <Text style={styles.textoResumenPagar}>
                                Total ................................... L. 158.50
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
                            data={["Efectivo", "tarjeta"]}
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
                        <Text style={styles.textoCombo}>
                            L. 158.50
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
      height: 80,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop: '-5%'
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
        marginTop: '9%'
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
        marginLeft: "35%"
    },
    contenedorResumenPagar: {
        flexDirection: 'row',
        backgroundColor: '#FAF0E8',
        alignItems: 'flex-start',
        width: '90%',
        height: 150,
        borderRadius: 30,
        marginTop: '-2%',
        padding: '4%'   
    },
    textoResumenPagar:{
        fontSize: 27,
        color: '#000',
        
    },
    contenedorDireccion: {
        flexDirection: 'row',
        backgroundColor: '#FAF0E8',
        alignItems: 'flex-start',
        width: '90%',
        height: 150,
        borderRadius: 30,
        marginTop: '1%',
        padding: '4%'   
    },
    textoDireccion:{
        fontSize: 27,
        color: '#000',
        textAlign: 'justify'
        
    },
    contenedorTituloSecundario:{
        marginTop: "2%"

    },
    textoTituloSecundario:{
        fontSize: 27,
        color: '#3EA5DB',
    },
    contenedorInstrucciones:{
        flexDirection: 'row',
        backgroundColor: '#FAF0E8',
        alignItems: 'flex-start',
        width: '90%',
        height: 150,
        borderRadius: 30,
        marginTop: '1%',
        padding: '4%'  
    },
    textoCombo:{
        marginLeft: "15%",
        fontSize: 27
    },
    contenedorCombo:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 80,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: '0%'
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
        fontSize: 30,
        color: '#fff',
        marginTop: "20%",
        padding: 20,
        marginTop: "-15%"
    },
    ContenedorBotonPagar: { 
      backgroundColor: '#3EA5DB',
      width: '120%',
      height: 40,
      borderRadius: 10,
      marginTop: '5%'
    }, 

});

export default Facturar;