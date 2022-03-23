import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function DetailsScreen({ navigation }) {
    const imprimir= () => {
        console.log("Press")

        AsyncStorage.getItem('token', (err, result) => {
          console.log(result);
        });
    }
  
    return (
        <View style={styles.containerPrincipal} >

           <View style={styles.containerTitulo}>
             <View style={styles.containerBack}>
              <Pressable onPress={()=> navigation.navigate('Login')}>
             <Image 
                    style={styles.imagenusuario}
                    source={require('./img/usuario.png')}
                 ></Image></Pressable>
              <Text style={styles.textCarrito}>Hola Gabriela,</Text>
              <Text style={styles.textCarrito}>Bienvenida</Text>
            </View>
           </View>
           <View style={styles.contenedorbuscar}>
              <TextInput
                placeholder="Que desea comprar"
                style={styles.entradas}>
              </TextInput>
            </View>
           <View style={styles.containerProducto} >
               <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                 
                    <Image 
                    style={styles.imagen}
                    source={require('./img/promos.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Promociones</Text>
               </View>
               <View style={styles.containerImagen}>
               
                    <Image 
                    style={styles.imagen}
                    source={require('./img/canasta.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Canasta Basica</Text>
               </View>
               </View>
           </View>
           <View style={styles.containerProducto}>
           <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
               <Pressable onPress={() => navigation.navigate('Subcategorias')}>
                    <Image 
                    style={styles.imagen}
                    source={require('./img/bebidas.png')}
                 ></Image></Pressable>
                 <Text style={styles.textProducto}>Juego y bebidas</Text>
               </View>
               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./img/carnes.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Carnes y embutidos</Text>
               </View>
               </View>
           </View>
           <View style={styles.containerProducto}>
           <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./img/lacteos.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Lacteos</Text>
               </View>
               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./img/frutas.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Frutas y verduras</Text>
               </View>
               </View>
           </View>
           <View style={styles.containerProducto}>
           <View style={styles.containerFilaPro}>
               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./img/hogar.jpg')}
                 ></Image>
                 <Text style={styles.textProducto}>Cuidado Personal</Text>
               </View>


               <View style={styles.containerImagen}>
                    <Image 
                    style={styles.imagen}
                    source={require('./img/limpieza.png')}
                 ></Image>
                 <Text style={styles.textProducto}>Cuidado del hogar</Text>
               </View>
               </View>
           </View>
           <View style={styles.contenedorpie}>
           
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

  contenedorbienvenida:{
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    marginTop: '0%'
  },

  contenedorbuscar:{
    backgroundColor: '#3EA5DB',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: '0%'
  },

  contenedorpie:{
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderRadius: 20,
    marginTop: '0%'
  },
containerProducto: {
    flex: 1, 
    marginLeft: '4%',
    marginRight: '4%',
    padding: -1
},
containerFilaPro: {
    flex:1,
    width: '100%', 
    alignItems: 'center', 
    flexDirection: 'row',
    backgroundColor: '#fff',
},
containerImagen: {
    flex:1, 
    alignItems: 'center',
    backgroundColor: '#FAF0E8',
    justifyContent: 'center',
    borderRadius: 30,
    height: '80%',
    margin:10
},
imagen: {
    margin: 3,
    width: 70,
    height: 70
},
imagenusuario: {
  margin: 3,
  width: 50,
  height: 50
},
entradas:{
  flex:1,
  alignItems:"stretch",
  margin:10,
  padding:10,
  fontSize: 20,
  fontWeight:"400",
  color: "#495057",
  backgroundColor:"#fff",
  borderWidth:1,
  borderStyle:"solid",
  borderColor: "#ced4da",
  borderRadius: 15,
  textAlign:'center'
}

})
