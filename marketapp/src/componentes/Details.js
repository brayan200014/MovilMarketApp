import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function DetailsScreen({ navigation }) {
    const imprimir= () => {
        console.log("Press")
    }
    return (
        <View style={styles.containerPrincipal} >
           <View style={styles.containerTitulo}>
             <View style={styles.containerBack}>
               <Pressable onPress={() => {imprimir()}} >
                <AntDesign name="arrowleft" size={24} color="white" />
              </Pressable>
              <Text style={styles.textCarrito}>Mi Carrito</Text>
              </View>
           </View>
           <View style={styles.containerProducto}>
               <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./banana.png')}
                 ></Image>
               </View>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Bananas</Text>
               <Text style={styles.textPrecio}>L 15.00</Text>
               <View style={styles.containerCantidadElegida}>
                    <Pressable onPress={()=> imprimir()}>
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.textCantidad}>1</Text>
                    <Pressable onPress={()=> imprimir()}>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={()=> imprimir()}>
                         <AntDesign name="delete" size={24} color="black" />
                    </Pressable>
               </View>
               </View>
               </View>
           </View>
           <View style={styles.containerProducto}>
               <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./banana.png')}
                 ></Image>
               </View>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Bananas</Text>
               <Text style={styles.textPrecio}>L 15.00</Text>
               <View style={styles.containerCantidadElegida}>
                    <Pressable onPress={()=> imprimir()}>
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.textCantidad}>1</Text>
                    <Pressable onPress={()=> imprimir()}>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={()=> imprimir()}>
                         <AntDesign name="delete" size={24} color="black" />
                    </Pressable>
               </View>
               </View>
               </View>
           </View>
           <View style={styles.containerProducto}>
               <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./banana.png')}
                 ></Image>
               </View>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Bananas</Text>
               <Text style={styles.textPrecio}>L 15.00</Text>
               <View style={styles.containerCantidadElegida}>
                    <Pressable onPress={()=> imprimir()}>
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.textCantidad}>1</Text>
                    <Pressable onPress={()=> imprimir()}>
                        <AntDesign name="minuscircleo" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={()=> imprimir()}>
                         <AntDesign name="delete" size={24} color="black" />
                    </Pressable>
               </View>
               </View>
               </View>
           </View>
           <View style= {styles.containerBotones} >
                    <View style={styles.containerSubtotal}>
                        <Text style={styles.textSubtotal}>Subtotal: L45.00</Text>
                    </View>
                <View style={styles.containerBotonPagar}>
                    <Pressable style={styles.botonPagar} onPress={()=> imprimir()}>
                        <Text style={styles.textPagar}> Pagar</Text>
                    </Pressable>
                </View>
           </View>
        </View>
    );
}

const styles= StyleSheet.create({
    containerPrincipal: {
        width: '100%',
        height: '95%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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
    marginRight: '4%'
},
containerFilaPro: {
    flex:1,
    width: '100%', 
    alignItems: 'center', 
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: '0%'

},
containerImagen: {
    flex:1, 
    alignItems: 'center',
    backgroundColor: '#FAF0E8',
    justifyContent: 'center',
    borderRadius: 30,
    height: '80%',
},
imagen: {
    margin: 3,
    width: 70,
    height: 70
},
containerInfo: {
    flex:1, 
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 30,
    height: '80%',
    marginLeft: '2%'
    
},
containerBotones: {
    flex: 1, 
    alignItems: 'center', 
    width: '100%',
    flexDirection: 'column'
},
containerSubtotal: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: '10%'

},
containerBotonPagar: { 
    alignItems: 'center', 
    width: '100%',
    justifyContent: 'center'
}, 
botonPagar: {
    backgroundColor:'#3EA5DB',
    borderRadius: 30,
    width: '30%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center'
},
textSubtotal: {
    fontSize: 18, 
    color: '#000'
},
textProducto: {
    fontSize: 18,
    color: '#3EA5DB'
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
    marginTop: '10%',
    justifyContent: 'space-between',
    width: '100%'
  },
  textPagar: {
      fontSize: 20,
      color: '#fff'
  }
})