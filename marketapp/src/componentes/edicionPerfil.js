import React from 'react';
import {View,Text,TextInput, SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme, Title,Caption,} from 'react-native-paper';


const edicionPerfil = () => {
  const {colors} = useTheme();
  return (
    <View style={{marginTop:70}}>
      <View style={styles.seccion}>
      <View> 
      <Text style={styles.name}>Edición de Perfil</Text>
      </View>
      </View>
      <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={30} />
          <TextInput
            placeholder="Nombre:"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>

      <View style={styles.action}>
      <FontAwesome name="user-o" color={colors.text} size={30} />
      <TextInput
        placeholder="Apellido"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput,
          {
            color: colors.text,
          },
        ]}
      />
      </View>
      <View style={styles.action}>
      <FontAwesome name="user-o" color={colors.text} size={30} />
      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput,
          {
            color: colors.text,
          },
        ]}
      />
      </View>
      <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={30} />
          <TextInput
            placeholder="Teléfono"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={30} />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#666666"
            returnKeyType='go'
            secureTextEntry
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
          <TouchableOpacity style={styles.Sbutton} onPress={() => {}}>
          <Text style={styles.ButtonPass}>Cambiar contraseña</Text>
        </TouchableOpacity>
        </View>
    <View style={styles.seccion2}>
    </View>
    <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Guardar cambios</Text>
        </TouchableOpacity>
      
    </View>
   
  );
};
export default edicionPerfil;

const styles = StyleSheet.create({
  name:{
      color:"#FFFFFF",
      fontSize:18,
      marginLeft:110,
  },
  seccion:{
   margin:10,
    backgroundColor: "#3EA5DB",
    height:60,
    borderRadius:30,
    justifyContent:'center',
    marginTop:25
  },
  seccion2:{
    backgroundColor:"#FF6347",
    height:30,
    marginTop:30
  },
  commandButton: {
    justifyContent:'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#3EA5DB',
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 17,
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
    marginTop: 30,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },

});
