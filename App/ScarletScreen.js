import React, {Component} from 'react';
import {Button, Text,SafeAreaView, FlatList,View, TextInput, StyleSheet, ScrollView, InputAccessoryView} from 'react-native';
import {Actions} from 'react-native-router-flux';
class ScarletScreen extends Component {
    state = {
        listItem : [], text:''
    }
    render() {
        const inputAccessoryViewID = "uniqueID";
        return(
        <View>
            <TextInput 
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={text => this.setState({text})}
                placeholder='nhap item'
                value={this.state.text}
            />
            <Button title='them item' onPress={()=> this.setState({
                listItem :[...this.state.listItem, {id : this.state.listItem.length + 1,title :this.state.text}], text :''
                })}
            >
            </Button>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.listItem}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
export default ScarletScreen;