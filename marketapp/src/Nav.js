import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./componentes/Details";
import SettingsScreen from "./componentes/Settings";
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import DesProductos from './componentes/especificacionProducto'

const Tab= createBottomTabNavigator();

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
                    height: 40,
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#F7D35C',
            tabBarInactiveTintColor: '#fff',
            headerShown: false
         

        }}
           
                
        >
            <Tab.Screen name="Home" component={DesProductos} 
            options={
                {
                   tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" size={size} color={color} />  
                   ),
                }
            } />
            <Tab.Screen name="Details" component={DetailsScreen} 
             options={
                {
                   tabBarIcon: ({color, size}) => (
                    <Ionicons name="cart-sharp" size={size} color={color} /> 
                   ),
                }
            }
            />
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