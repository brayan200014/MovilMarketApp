import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, StatusBar, RefreshControl} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import {AsyncStorage,  useAsyncStorage } from '@react-native-async-storage/async-storage';


export default function DetailsScreen({ navigation }) {

    const imprimir= () => {
        console.log("Press")
    }

    const [nombreProducto, setNombreProducto]= useState('hola');
    const [descripcionProducto, setDescripcion]= useState('hola');
    const [IdProducto, setIdProducto]= useState(null);
    const encondedValue= encodeURIComponent(IdProducto);
    const [cantidad, setCantidad]= useState(0);
    const[productosCarrito, setProductosCarrito]= useState([]);
    const {getItem,setItem}= useAsyncStorage('ProductosArray'); 

    const addCantidad = async () => {
        let add=cantidad+1;
        setCantidad(add);
    }
  
    const lessCantidad= async () => {
      let add=cantidad-1;
  
      if(!add==0) {
        setCantidad(add);
      }
  }


  

  const cargarArreglo = async () => {
      const items= await getItem();
      const listado= JSON.parse(items);
       setProductosCarrito(JSON.parse(items));
     // console.log(listado); 
    }


  const itemsCarrito =  () => {
    cargarArreglo();
    let list= productosCarrito;
    let listado=list;
      return listado.map((item)=> {
          return (
        <View key={item.IdProducto} style={styles.containerProducto}>
            <View style={styles.containerFilaPro}>
            <View style={styles.containerImagen}>
                 <Image 
                 style={styles.imagen}
                 source={{uri: 'http://192.168.0.8:6001/api/archivos/consultar?id='+item.IdProducto}}
              ></Image>
            </View>
            <View style={styles.containerInfo}>
            <Text style={styles.textProducto}>{item.NombreProducto}</Text>
            <Text style={styles.textPrecio}>L 15.00</Text>
            <View style={styles.containerCantidadElegida}>
                 <Pressable onPress={()=> addCantidad()}>
                     <AntDesign name="pluscircleo" size={24} color="black" />
                 </Pressable>
                 <Text style={styles.textCantidad}>{item.Cantidad}</Text>
                 <Pressable onPress={()=> lessCantidad()}>
                     <AntDesign name="minuscircleo" size={24} color="black" />
                 </Pressable>
                 <Pressable onPress={()=> imprimir()}>
                      <AntDesign name="delete" size={24} color="black" />
                 </Pressable>
            </View>
            </View>
            </View>
        </View>
        
          )
      })
  }
    
    return (
  
    <SafeAreaView style={styles.safearea}>
    <ScrollView style={styles.scrolli}
         refreshControl={
            <RefreshControl
              
            />
          }
    
    >
        <View style={styles.containerPrincipal} >
            {itemsCarrito()}
        </View>
        <View style= {styles.containerBotones} >
               <View style={styles.containerBotonPagar}>
                   <Pressable style={styles.botonPagar} onPress={()=> navigation.navigate("Factura")}>
                        <Text style={styles.textPagar}> Pagar</Text>
                    </Pressable>
                </View>
                <View style={styles.containerSubtotal}>
                        <Text style={styles.textSubtotal}>Subtotal: L45.00</Text>
                </View>    
           </View>
        </ScrollView>
        </SafeAreaView>
       
    );
}

const styles= StyleSheet.create({
    safearea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
        
        
    },
    scrolli: {
        flex: 1,
        marginBottom: '15%'
    },
    containerPrincipal: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        paddingBottom: '8%'
    },
containerTitulo : {
    
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
containerProducto: {
    flex: 1, 
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: '#3EA5DB',
    borderRadius: 30,
    marginBottom: '5%',
    flexDirection: 'column'
    
},
containerFilaPro: {
    flex:1,
    width: '100%', 
    alignItems: 'center', 
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: '0%',
    marginBottom: '2%',
    borderRadius: 30,

},
containerImagen: {
    flex:1, 
    alignItems: 'center',
    backgroundColor: '#f7d35c',
    justifyContent: 'center',
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    height: '100%',
    marginTop: '0%'
},
imagen: {
    margin: 3,
    width: 90,
    height: 90
},
containerInfo: {
    flex:1, 
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    height: '100%',
    paddingLeft: '1%',
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderRightWidth:2,
    borderTopWidth: 2,
    borderColor: '#3EA5DB'
    
    
},
containerBotones: {
    flex: 1,
    alignItems: 'center', 
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f7d35c',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F4F0E8',
    marginLeft: '5%'
},
containerSubtotal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

},
containerBotonPagar: { 
    flex: 1,
    alignItems: 'center', 
    width: '100%',
    justifyContent: 'center'
}, 
botonPagar: {
    backgroundColor:'#3EA5DB',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    width: '50%',
    height:'65%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%'
},
textSubtotal: {
    fontSize: 18, 
    color: '#000'
},
textProducto: {
    fontSize: 18,
    color: '#000'
},
textPrecio: {
    fontSize: 18,
    color: '#000',
    marginTop: '8%'
},
textCantidad: {
    fontSize: 18,
    color: '#000',
},
containerCantidadElegida: {
    flex: 1, 
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'space-evenly',
    width: '100%',

  },
  textPagar: {
      fontSize: 20,
      color: '#fff'
  }
})