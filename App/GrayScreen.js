import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
class GrayScreen extends Component{
    render(){
        return(
            <View>
                <Text style = {styles.text} >Title gray</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});
export default GrayScreen;