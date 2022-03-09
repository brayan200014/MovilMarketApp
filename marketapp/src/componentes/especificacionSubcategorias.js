import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
/*<View style={styles.containerTitulo}>
          <View style={styles.containerBack}>
            <Pressable onPress={() => {imprimir()}} >
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
            <Text style={styles.textinicio}>Bebidas y Jugos</Text>
          </View>
        </View>*/ 
export default function DetailsScreen({ navigation }) {
    const imprimir= () => {
        console.log("Press")
    }
    return (
      <View style={styles.containerPrincipal} >
        

        <View style={styles.containerProducto}>
          <View style={styles.containerFilaPro}>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/bebidas.png')}></Image>
               <View style={styles.containerInfo}>
               
               <Text style={styles.textProducto}>Agua Goascoran</Text>
                <Text style={styles.textPrecio}>L 50.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> navigation.navigate('Productos')}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/bebidas.png')}></Image>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Jugo Sula</Text>
                <Text style={styles.textPrecio}>L 15.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> imprimir()}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerProducto}>
          <View style={styles.containerFilaPro}>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/bebidas.png')}></Image>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Jugo Leyde</Text>
                <Text style={styles.textPrecio}>L 50.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> imprimir()}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/bebidas.png')}></Image>
               <View style={styles.containerInfo}>
                <Text style={styles.textProducto}>Vino</Text>
                <Text style={styles.textPrecio}>L 15.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> imprimir()}>
                  <AntDesign name="pluscircleo" size={20} color="black" /></Pressable>
              </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerProducto}>
          <View style={styles.containerFilaPro}>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/bebidas.png')}></Image>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Agua Dassani</Text>
                <Text style={styles.textPrecio}>L 50.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> imprimir()}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
            <View style={styles.containerImagen}>
              <Image style={styles.imagen}source={require('./img/bebidas.png')}></Image>
               <View style={styles.containerInfo}>
               <Text style={styles.textProducto}>Gatorade</Text>
                <Text style={styles.textPrecio}>L 15.00</Text>
              <View style={styles.containerCantidadElegida}>
                <Pressable onPress={()=> imprimir()}>
                  <AntDesign name="pluscircleo" size={24} color="black" /></Pressable>
              </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginBottom: '30%'}}></View>
      </View>
    );
}

const styles= StyleSheet.create({
    containerPrincipal: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%',
    },
containerTitulo : {
    
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    marginTop: '0%'
},
containerBack: {
    backgroundColor: '#3EA5DB', 
    alignItems: 'flex-start',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '6%',
    flexDirection: 'row',
    marginTop:'1%',
  },
  textinicio:{
      fontSize: 20,
      color: '#fff',
      paddingHorizontal: '1%',
      textAlign: 'right'
  },

  containerProducto: {
    flex: 1, 
    marginLeft: '4%',
    marginRight: '4%',
    padding:-1,
},
containerFilaPro: {
    flex:1,
    width: '100%', 
    alignItems: 'center', 
    flexDirection: 'row',
    marginTop: 10,

},
containerImagen: {
    flex:1, 
    alignItems: 'center',
    backgroundColor: '#B3E5FC',
    justifyContent: 'center',
    borderRadius: 30,
    height: '80%',
    margin: 10
},
imagen: {
    margin: 0,
    width: 70,
    height: 70
},
containerInfo: {
    flex:1, 
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    height: '80%',
    marginLeft: '2%',
    textAlign:'left',
},
textProducto: {
    fontSize: 18,
    color: '#000',
    margin: '0%', 
},
textPrecio: {
    fontSize: 12,
    color: '#000',
    margin: '0%', 
    textAlign:'left',
},
textpeso: {
    fontSize: 12,
    color: '#000',
},
contenedorpie:{
  backgroundColor: '#3EA5DB',
  alignItems: 'flex-start',
  flexDirection: 'row',
  height: 50,
  width: '100%',
  borderBottomEndRadius: 0,
  borderBottomStartRadius: 0,
  borderRadius: 20,
  marginTop: '0%'
},
containerCantidadElegida: {
    flex: 1, 
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-between',
    width: '100%'
  },
})