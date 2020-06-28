import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';


export default class LoadingScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assits/logo.png')} />

            </View>    

        )
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3A4752'
        },
});