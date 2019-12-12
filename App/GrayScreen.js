import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
class GrayScreen extends Component{
    render(){
        return(
            <View>
                <Text onPress={()=>Actions.scarlet()}>
                    GrayScreent
                </Text>
            </View>
        )
    }
}
export default GrayScreen;