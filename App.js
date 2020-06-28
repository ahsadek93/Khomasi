
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Loading from './components/Loading'
import LoadingScreen from './components/pages/LoadingScreen'
import SignIn from './components/pages/SignIn'





export default class App extends Component {
    state = {
        loaded: false,
    }

constructor(){
    super()
    Loading.load(v => this.setState({loaded:true}));
}


    render(){
        if (this.state.loaded){
            return (
                <SignIn />
            ) 
        } else {
            return(
                <LoadingScreen />
            )}
}}