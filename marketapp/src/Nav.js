import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./componentes/Details";
import SettingsScreen from "./componentes/Settings";
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Especificacion from "./componentes/especificacionProducto";
import Prueba from "./componentes/prueba";
import EspecificaionCategorias from "./componentes/especificacionCategorias"
import NavigatorDetails from "./NavigatorDetails";
import NavigatorProductos from "./NavigatorProductos";

const Tab= createBottomTabNavigator();
const HomeStack= createNativeStackNavigator();
const PayStack= createNativeStackNavigator();


const Tabs= ()=>{
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                position: 'absolute',
                    bottom: 0,
                    elevation: 0,
                    backgroundColor: '#3EA5DB',
                    borderTopRightRadius: 40,
                    borderTopLeftRadius: 40,
                    height: 60,
                    alignItems: "center",
                    paddingBottom: 5
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#F7D35C',
            tabBarInactiveTintColor: '#fff',
            headerShown: false
         

        }}
           
                
        >
            <Tab.Screen name="Home" component={NavigatorProductos}
            options={
                {
                   tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" size={size} color={color} />  
                   ),
                }
            
            }> 
            </Tab.Screen>
            <Tab.Screen name="Details" component={NavigatorDetails}
             options={
                {
                   tabBarIcon: ({color, size}) => (
                    <Ionicons name="cart-sharp" size={size} color={color} /> 
                   ),
                }
            }
            > 
                </Tab.Screen>
            <Tab.Screen name="Settings" component={SettingsScreen}  options={
                {
                   tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings" size={24} color={color} />
                   ),
                }
            }
             />
        </Tab.Navigator>
    );
}


export  default Tabs;