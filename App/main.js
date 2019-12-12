import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
  } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import GrayScreen from './GrayScreen';
import ScarletScreen from './ScarletScreen';
const tabicon = ({selected, title})=>
  <Text style={{color: selected ?'red':'black'}}></Text>
const main = ()=>{
    return (
        <Router>
        <Scene key="root">
          <Scene 
          key="tabbar"
          tabs
          tabBarStyle={{backgroundColor:"#FFFFFF"}}
          >
            <Scene key="GrayScreen" title="Gray Screen" icon={tabicon}>
              <Scene key="gray" component={GrayScreen} title="Gray Screen" initial/>
            </Scene>
            <Scene key="ScarletScreen" title="Scarlet Screen" icon={tabicon}>
              <Scene key="scarlet" component={ScarletScreen} title="Scarlet Screen" initial/>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
}
export default main;