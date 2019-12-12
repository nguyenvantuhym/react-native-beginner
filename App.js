/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,  {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Router, Scene} from 'react-native-router-flux';
import GrayScreen from './App/GrayScreen';
import ScarletScreen from './App/ScarletScreen';

export default class App extends Component {
  constructor(props)
  {
    super(props);

  }
 
  render() {
    const tabicon = ({selected, title})=> <Text>{title}</Text>
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <Router>
        <Scene key="root">
          <Scene 
          key="tabbar"
          tabs
          tabBarStyle={{backgroundColor:"#FFFFFF"}}
          >
            <Scene key="osu" title="osu" icon={tabicon}>
              
              <Scene key="gray" component={GrayScreen} title="Gray Screen" initial/>
              <Scene key="scarlet" component={ScarletScreen} title="Scarlet Screen" />
            </Scene>

            <Scene key="bsu" title="bsu" icon={tabicon}>
              
              <Scene key="gray" component={GrayScreen} title="Gray Screen" />
              <Scene key="scarlet" component={ScarletScreen} title="Scarlet Screen" initial/>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}