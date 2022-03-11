import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

const edicionPerfil = () => {

  return (
    <View>
      <View style={styles.seccion}>
      <View> 
      <Text style={styles.name}>Edición de Perfil</Text>
      </View>
      </View>
      <View>
      <>

      <Input style= {styles.input}placeholder="Nombre :"/>
      <Input style= {styles.input}placeholder="Apellido :"/>
      <Input style= {styles.input}placeholder="Número teléfono :"/> 
      <Input style= {styles.input}placeholder="Usuario :"/>
      <Input style= {styles.input}placeholder="Contraseña :" secureTextEntry={true} />
      <Input style= {styles.input}placeholder="Dirección :" />
      
    </>
    <View style={styles.Button1}>
      <Button 
      title="Guardar Cambios">
         </Button>
      </View>
     
    </View>
    <View style={styles.seccion2}>
    </View>
      
    </View>
   
  );
};
export default edicionPerfil;

const styles = StyleSheet.create({
  name:{
      color:"#FFFFFF",
      fontSize:22,
      marginLeft:110,
      marginTop:40
  },
  seccion:{
    backgroundColor: "#3EA5DB",
    height:100,
    borderRadius:30
  },
  input:{
    marginTop:30,
    width: 200,
    height: 30,
    borderColor:"#43519D"
  },
  Button1:{
    alignItems: 'center',
    borderRadius:10,
    margin:30,
    
  },
  seccion2:{
    backgroundColor:"#3EA5DB",
    height:30,
    marginTop:30
  }

});
