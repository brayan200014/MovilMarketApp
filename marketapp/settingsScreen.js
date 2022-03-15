import React from "react";
import { View ,Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EdicionPerfil from "./src/componentes/edicionPerfil";
import InformacionApp from "./src/componentes/informacionApp";
import Perfil from "./src/componentes/perfil"


const SettingsStackScreen=() =>{
   
    const SettingsStack=createNativeStackNavigator();
    
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Cuenta de perfil" component={Perfil}/>
            <SettingsStack.Screen name="Configuracion de cuenta" component={EdicionPerfil}/>
            <SettingsStack.Screen name="InfoAPP" component={InformacionApp}/>
             
        </SettingsStack.Navigator>

    );
};
export default SettingsStackScreen;