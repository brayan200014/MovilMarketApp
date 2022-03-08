import React from "react";
import { View,Dimensions,StyleSheet,Text } from "react-native";

const dish = Dimensions.get('window').height;
const disw = Dimensions.get('window').width;

class Información extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.upperSections}>
                    <Text>Secction 1 </Text>
                    </View>
                    <View style={styles.bottomSection}>
                    <Text>Secction 2</Text>

            </View>
            </View>
        )
    }
}


