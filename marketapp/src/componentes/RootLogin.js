import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import RootLogin from "./RootLogin";
import NavigationLogin from "./NavigationLogin";



const Navigation= () => {
   
   return (
       <NavigationLogin></NavigationLogin>
   )
}

export default Navigation;