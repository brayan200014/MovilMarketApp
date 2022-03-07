import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  const imprimir= () => {
     console.log("Ho0pl");
  }
  return (
    <View style={styles.container}>
     <View style={styles.containerProducto}>
         <View style={styles.containerBack} >
           <Pressable onPress={()=> imprimir()} >
                <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
           </View>
          <Image 
          style={styles.containerImagen}
          source={require('./banana.png')
          } ></Image>
      </View>
      <View style= {styles.containerInformacion}>
        <View style={styles.containerNombreProducto}> 
          <Text style= {styles.nombreProducto}>Bananas</Text>
          <Text style= {styles.informacionProducto}>Frescas bananas exportadas del pais de Honduras. Esta es una fruta muy rica en potasio. </Text>
        </View>
       
        <View style={styles.containerCantidad}>
          <View style={styles.containerCantidadElegida}>
              <Pressable onPress={()=> imprimir()}>
                 <AntDesign name="pluscircleo" size={30} color="black" />
              </Pressable>
              <Text style={styles.numeroCantidad}>1</Text>
              <Pressable onPress={()=> imprimir()}>
                 <AntDesign name="minuscircleo" size={30} color="black" />
              </Pressable>
            </View>
            <View style={styles.containerPrecioProducto}>
                  <Text style= {styles.precioProducto}>L 15</Text>
            </View>
        </View>
        <View style={styles.containerBotonAgregar}>
        <Pressable style={styles.botonAgregar} onPress={() => imprimir()}>
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
    marginTop: '5%'
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
    height: '10%', 
    alignItems: 'flex-start',
    backgroundColor: '#3EA5DB',
    marginLeft: '8%',
    marginRight: '4%',
    marginTop: '2%'
  },
  containerImagen: {
      margin:10, 
      width:300,
      height:300    
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
  marginBottom: '15%',
  borderRadius: 30,
  alignItems: 'center'
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

