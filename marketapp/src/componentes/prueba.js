import * as React from 'react';
import { View, Text } from 'react-native';

export default function Prueba({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Root')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Especificacion Screen</Text>
        </View>
    );
}