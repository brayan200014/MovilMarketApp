import React, { Component } from 'react'
import {View,Text,TextInput, SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme, Title,Caption,} from 'react-native-paper';
import { useEffect ,useState} from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
 //<const {colors} = useTheme();>
 
 export default function EdicionPerfil({ navigation }) {
     
  const [Correo, setCorreo]= useState(null);
    const [usuario, setUsuario]= useState(null);
    const [estado, setEstado]= useState(null);

    const presGuardar= async () => {
        if(!Correo || !usuario || !estado) {
            Alert.alert("¡Estimado Usuario!","Por favor, llene los datoss");
        }
        else 
        { 
          try {
                let respuesta= await fetch(
                  'http://192.168.1.5:5001/api/cliente/modificarCorreo',
                  {
                      method: 'PUT',
                      headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          Correo: Correo,
                          NombreUsuario: usuario,
                          Estado: estado,
                      })
                  }).then(response => {
                      const statusCode = response.status;
                      const data = response.json();
                      return Promise.all([statusCode, data]);
                  }).catch(error =>{
                      console.log(error);
                  });
                  respuesta=respuesta;
                  console.log(respuesta);
                  if(respuesta[0]==200){
                      Alert.alert("Usuario Modificado Actualizada");
                  }
                  else{
                      Alert.alert("Error!", respuesta[1].msj);
                  }

            } catch(error) {
                console.log(error);
            }
        }  
}

  return (
    <View >
      <View style={styles.seccion}>
      <View> 
      <Text style={styles.name}>Edición de Perfil</Text>
      </View>
      </View>
      <View style={styles.action}>
          <FontAwesome name="user-o" size={30} />
          <TextInput
          onChangeText={newText => setCorreo(newText)}
            placeholder={"Correo"}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                
              },
            ]}
          />
        </View>

      <View style={styles.action}>
      <FontAwesome name="user-o" size={30} />
      <TextInput
      onChangeText={newText => setUsuario(newText)}
        placeholder="Nombre Usuario:"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput,
          {
            //color: colors.text,
          },
        ]}
      />
      </View>
      <View style={styles.action}>
      <FontAwesome name="user-o" size={30} />
      <TextInput
      onChangeText={newText => setEstado(newText)}
        placeholder="Estado:"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput,
          {
            //color: colors.text,
          },
        ]}
      />
      </View>
        <View style={styles.action}>
          <FontAwesome name="lock" size={30}/>
          <TextInput
            placeholder="Contraseña:"
            placeholderTextColor="#666666"
            returnKeyType='go'
            secureTextEntry
            autoCorrect={false}
            editable={false} 
            selectTextOnFocus={false} 
            style={[
              styles.textInput,
              {
                //color: colors.text,
              },
            ]}
          />
          <TouchableOpacity style={styles.Sbutton} onPress={() => {}}>
          <Text style={styles.ButtonPass}>Cambiar contraseña</Text>
        </TouchableOpacity>
        </View>
    <TouchableOpacity style={styles.commandButton} onPress={presGuardar}>
          <Text style={styles.panelButtonTitle}>Guardar cambios</Text>
        </TouchableOpacity>

    </View>
   
  );
}

const styles = StyleSheet.create({
  name:{
      color:"#FFFFFF",
      fontSize:18,
      marginLeft:20
  },
  seccion:{
    backgroundColor: "#2874A6",
    height:50,
    width:200,
    justifyContent:'center',
    marginTop:120,
    borderColor:'#828282',
    borderWidth:2
  },
  seccion2:{
    backgroundColor:"#FF6347",
    height:30,
    marginTop:10
  },
  commandButton: {
    justifyContent:'center',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#2874A6',
    alignItems: 'center',
    marginTop: 90,
    marginLeft:20,
    marginRight:20,
    borderWidth:2,
    borderColor:'#828282'
  },
  Sbutton: {
    backgroundColor:'#3EA5DB',
  width:200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },

  panelButtonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  ButtonPass: {
    fontSize: 12,
    color: '#FFFFFF',
    justifyContent:'center',
    borderRadius:10,
    fontWeight:'bold'
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    height:50,
    marginBottom: 30,
    borderBottomWidth:2,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    backgroundColor:'#D5D5D5',
    margin:10,
    borderRadius:60,
    padding:10,
    borderEndWidth:5,
    borderColor:'#FF5733'
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#FF0000',
   
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    color: '#05375a',
  },

});
