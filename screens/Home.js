import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native'


export class Home extends Component{
    constructor(props){
        super(props);
        this.state = {inputText:''};
    }

    /* es5
    function textChanged(text){

    }
    */
    /* es6
    textChanged = (text) => {

    }
    */
    /* es5
    function showObj(student){
        console.log(student.first_name);
        console.log(student.roll_num);
    }
    showObj({first_name:"Vasu", roll_num:2133})
    */
   /* es6
   showObj = ({first_name,roll_num}) => {
       console(first_name);
       console(roll_num)
   }
   showObj({first_name:"Vasu", roll_num:2133});
   */

    //myTextValueChanged = (text) => this.setState({inputText:text});

    render(){
         return <View style={{alignItems:'center', top: 20}}>
            <Text style={{fontSize:40}}>Hi {this.props.myName}</Text>
            <TextInput placeholder="Enter here" onChangeText={(text) => this.setState({inputText:text})}/>
            <Text style={{fontSize:30}}>{this.state.inputText}</Text>
        </View>
    }
}