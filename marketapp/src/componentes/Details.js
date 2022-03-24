import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, StatusBar, RefreshControl} from 'react-native';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons'; 
import { useState, useEffect, Component } from 'react';
import {AsyncStorage,  useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';




export default function DetailsScreen({ navigation }) {

    const imprimir= () => {
        console.log("Press")
    }

    const [nombreProducto, setNombreProducto]= useState('hola');
    const [descripcionProducto, setDescripcion]= useState('hola');
    const [IdProducto, setIdProducto]= useState(null);
    const encondedValue= encodeURIComponent(IdProducto);
   // const [cantidad, setCantidad]= useState(0);
    const[productosCarrito, setProductosCarrito]= useState([{}]);
    const {getItem,setItem}= useAsyncStorage('ProductosArray'); 
    const [pagoListen, setPagoListen]= useState([{key:1}]);
    const [refreshing, setRefreshing] = React.useState(false);
    

    useEffect(() => {
        
    })


  const updatePlusCantidad= async (id) => {
        const arrayProductos= await getItem();
        const getArray= JSON.parse(arrayProductos); 

        for (var i=0; i<getArray.length; i++) {
            if(id== getArray[i]['IdProducto']) {
                getArray[i]['Cantidad']+= 1;
            }
        }

        await setItem(JSON.stringify(getArray));
        setProductosCarrito(JSON.parse(arrayProductos));
  }

  const updateMinusCantidad= async (id) => {
    const arrayProductos= await getItem();
    const getArray= JSON.parse(arrayProductos); 

    for (var i=0; i<getArray.length; i++) {
        if(id== getArray[i]['IdProducto']) {
            if(getArray[i]['Cantidad']!=1){
                getArray[i]['Cantidad']-= 1;
            }
        }
    }

    await setItem(JSON.stringify(getArray));
    setProductosCarrito(JSON.parse(arrayProductos));
}

const deleteProducto = async (id) => {
    const arrayProductos= await getItem();
    const getArray= JSON.parse(arrayProductos); 

    for (var i=0; i<getArray.length; i++) {
        if(id== getArray[i]['IdProducto']) {
            getArray.splice(i,1); 
        }
    }
    

  /*  if(getArray=='') {
        setPagoListen(getArray);
        console.log("Wntre")
    }*/


    await setItem(JSON.stringify(getArray));
    setProductosCarrito(JSON.parse(arrayProductos));
}
  

  const cargarArreglo = async () => {
      const items= await getItem();
      const listado= JSON.parse(items);
      setProductosCarrito(JSON.parse(items));
    }



  
   

 const cargarPago= () => {
      let listado= pagoListen;

      let arrayProductos= productosCarrito;
      let subtotal=0;

      if(arrayProductos==null || arrayProductos=='')
      {
        return listado.map((item) => {
            return (
                <View key={item.key} ></View>
            )
          })
      }

     else  if(arrayProductos) {
        for(var i=0; i<arrayProductos.length;i++) {
            subtotal+= arrayProductos[i]['Precio']*arrayProductos[i]['Cantidad'];
        }
        return listado.map((item) => {
            return (
                <View key={item.key} style= {styles.containerBotones} >
                <View style={styles.containerBotonPagar}>
                    <Pressable style={styles.botonPagar} onPress={()=> navigation.navigate("Factura", {subtotal})}>
                         <Text style={styles.textPagar}> Pagar</Text>
                     </Pressable>
                 </View>
                 <View style={styles.containerSubtotal}>
                         <Text style={styles.textSubtotal}>{"Subtotal: L "+subtotal}</Text>
                 </View>    
            </View>
            )
          })
      } 
    
  }



 const itemsCarrito =  () => {
    cargarArreglo();
    let list= productosCarrito;
    let listado=list;
   
     if(listado=='' || listado==null)
    {
        
        return (
            <View style={styles.containerEmptyCar}>
               <Image source={require('./img/empty-cart.png')}></Image>
               <Text style={styles.textEmptyCar}>Tu carrito de compras esta vacio </Text>
               <Text style={styles.textEmptyCar}>Añade un producto a tu carrito</Text>
               <Text style={styles.textRefresh}>Refresca deslizando sino aparece</Text>
            </View>
        )
    }
    else if(listado)
    {
        
        
        return listado.map((item)=> { 
            return (
          <View key={item.IdProducto} style={styles.containerProducto}>
              <View style={styles.containerFilaPro}>
              <View style={styles.containerImagen}>
                   <Image 
                   style={styles.imagen}
                   source={{uri: 'http://192.168.1.5:6001/api/archivos/consultar?id='+item.IdProducto}}
                ></Image>
              </View>
              <View style={styles.containerInfo}>
              <Text style={styles.textProducto}>{item.NombreProducto}</Text>
              <Text style={styles.textPrecio}>{"L "+item.Precio}</Text>
              <View style={styles.containerCantidadElegida}>
                   <Pressable onPress={()=> updatePlusCantidad(item.IdProducto)}>
                       <AntDesign name="pluscircleo" size={24} color="black" />
                   </Pressable>
                   <Text style={styles.textCantidad}>{item.Cantidad}</Text>
                   <Pressable onPress={()=> updateMinusCantidad(item.IdProducto)}>
                       <AntDesign name="minuscircleo" size={24} color="black" />
                   </Pressable>
                   <Pressable onPress={()=> deleteProducto(item.IdProducto)}>
                        <AntDesign name="delete" size={24} color="black" />
                   </Pressable>
              </View>
              </View>
              </View>
          </View>
          
            
        )})
      
    
    } 
      
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    cargarArreglo();
    wait(500).then(() => setRefreshing(false));
  }, []);

 
 
    return (
  
        <SafeAreaView style={styles.safearea}>
        <ScrollView style={styles.scrolli}
             refreshControl={
                <RefreshControl
                 refreshing={refreshing}
                 onRefresh= {onRefresh}
                />
              }
        
        >
            <View style={styles.containerPrincipal} >
               {itemsCarrito()}
               {cargarPago()}
            </View>
            </ScrollView>
            </SafeAreaView>
           
        ); 
  
   
}

const styles= StyleSheet.create({
    safearea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff'

    },

    scrolli: {
        flex: 1,
        marginBottom: '15%',
        
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
    marginLeft: '5%',
    
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
  containerEmptyCar: {
      alignItems: 'center',
      paddingTop: '30%'
  },
  textPagar: {
      fontSize: 20,
      color: '#fff'
  },
  textEmptyCar: {
      fontSize: 16,
      paddingTop: '4%'
  },
  textRefresh: {
      fontSize: 13,
      paddingTop: '4%'
  }
})