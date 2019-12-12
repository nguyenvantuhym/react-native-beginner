import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
class ScarletScreen extends Component {
    render() {
        return(
        <View>
            <Text onPress={()=>Actions.gray()}>
                ScarletScreent
            </Text>
        </View>
        )
    }
}
export default ScarletScreen;