import React, {Component} from 'react';
import {View} from 'react-native';
import {Home} from './screens/Home';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return <View style={{alignItems:'center'}}>
        <Home myName="How are you" />
    </View>
  }

}