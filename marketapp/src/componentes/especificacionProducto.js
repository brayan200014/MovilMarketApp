import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

export default function App({navigation}) {
  const [nombreProducto, setNombreProducto]= useState('hola');
  const [descripcionProducto, setDescripcion]= useState('hola');
  const [IdProducto, setIdProducto]= useState(null);
  const encondedValue= encodeURIComponent(IdProducto);
  const [cantidad, setCantidad]= useState(1);

  const addCantidad= async () => {
      let add=cantidad+1;
      setCantidad(add);
  }

  const lessCantidad= async () => {
    let add=cantidad-1;

    if(!add==0) {
      setCantidad(add);
    }
}
  
  const consultarProducto= async ()=>{
     if(!nombreProducto || !descripcionProducto) {
        console.log("Datos vacios del productos");
     }
     else 
     {
       try {
         const solicitud= await fetch(
           'http://192.168.0.8:6001/api/productos/listarProducto?id=2',
           {
             method: 'GET',
             headers: {
               Accept: 'application/json', 
               'Content-Type': 'application/json'
             }
           }
         )

         const respuesta= await solicitud.json();
         const data= respuesta.data;
         setDescripcion(data.DescripcionProducto);
         setNombreProducto(data.NombreProducto);
         setIdProducto(data.IdProducto);
         console.log(respuesta);
         
       } catch (error) {
        
        console.log(error);
       }
     }
  }

  const imprimir= () => {
     console.log("Ho0pl");
  }


  return (
    <View style={styles.container}>
     <View style={styles.containerProducto}>
        
           <Image 
                    style={styles.containerImagen}
                    source={{uri: 'http://192.168.0.8:6001/api/archivos/consultar?id='+encondedValue}}
                 ></Image>
      </View>
      <View style= {styles.containerInformacion}>
        <View style={styles.containerNombreProducto}> 
          <Text style= {styles.nombreProducto}>{nombreProducto}</Text>
          <Text style= {styles.informacionProducto}>{descripcionProducto}</Text>
        </View>
       
        <View style={styles.containerCantidad}>
          <View style={styles.containerCantidadElegida}>
              <Pressable onPress={()=> addCantidad()}>
                 <AntDesign name="pluscircleo" size={30} color="black" />
              </Pressable>
              <Text style={styles.numeroCantidad}>{cantidad}</Text>
              <Pressable onPress={()=> lessCantidad()}>
                 <AntDesign name="minuscircleo" size={30} color="black" />
              </Pressable>
            </View>
            <View style={styles.containerPrecioProducto}>
                  <Text style= {styles.precioProducto}>L 15</Text>
            </View>
        </View>
        <View style={styles.containerBotonAgregar}>
        <Pressable style={styles.botonAgregar} onPress={() => consultarProducto()}>
                <View style={styles.containerTextoAgregar}>
                  <Text style={styles.textAgregar}>Agregar</Text>
                  <AntDesign name="shoppingcart" size={30} color="white" />
                </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3EA5DB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
  },
  containerProducto: {
      flex: 1,
      backgroundColor: '#3EA5DB',
      alignItems: 'center',
      width: '100%',
      height:'100%',
  },
  containerBack: {
    width: '100%',
    height: '15%', 
    alignItems: 'flex-start',
    backgroundColor: '#3EA5DB',
    marginLeft: '10%',
    marginRight: '4%',
    marginTop: '12%'
  },
  containerImagen: {
      marginTop: '20%', 
      width:250,
      height:250   
  },
  containerInformacion: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height:'100%',
    paddingTop: '8%',
    borderTopLeftRadius: 30, 
    borderTopRightRadius:30
},
containerNombreProducto: {
  flex: 1,
  marginRight: '4%',
  marginLeft:'4%',
  alignItems: 'flex-start',

}
,
nombreProducto: {
  color: "#3EA5DB",
   fontSize: 30
},

informacionProducto: {
  fontSize: 18,
  paddingTop: '4%'
},
containerCantidad: {
  flex: 1, 
  flexDirection: 'row',
  marginRight: '4%',
  marginLeft:'4%',
  paddingTop: '5%'
  
},
containerBotonAgregar: {
  flex: 1, 
  backgroundColor: '#fff',
  marginRight: '4%',
  marginLeft:'4%',
  alignItems: 'center'
},
containerPrecioProducto: {
  flex: 1, 
  alignItems: 'flex-end',
  marginTop: '3%'
},
precioProducto:{
  fontSize: 26
},
containerCantidadElegida: {
  flex: 1, 
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: '3%'
},
numeroCantidad: {
  fontSize: 26,
  color: '#000'
},
botonAgregar: {
  backgroundColor: '#3EA5DB',
  flex: 1,
  width: '40%',
  marginBottom: '20%',
  borderRadius: 30,
  alignItems: 'center',
  
},
containerTextoAgregar:{
  flex:1,
  alignItems: 'center',
  flexDirection: 'row'
},
textAgregar: {
  fontSize: 20, 
  color: '#fff'
}


});

