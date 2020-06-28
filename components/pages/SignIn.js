import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }




    render(){
        return (
            <View style={styles.container} > 
                <View style={styles.heading}>
                    <Text style={styles.headingText}> Sign In </Text>
                    
                </View>

                <View style={styles.body}>
                    <View style={styles.bodyInputContainer}>
                        <Icon name="envelope" size={20} color="#A6BCD0" />
                        <TextInput style={styles.bodyInput}
                        placeholder="Email"
                        onChangeText={(val)=> this.setState({email: val})}
                        />
                    </View>

                    <View style={styles.bodyInputContainer}>
                        <Icon name="lock" size={20} color="#A6BCD0" />

                        <TextInput style={styles.bodyInput}
                        placeholder="Password"
                        onChangeText={(val)=> this.setState({password: val})}
                        secureTextEntry={true}
                        />
                    </View>

                        <Text style={styles.bodyText}>Forgot Password?</Text>
                        <Text style={styles.bodyText}>Create Account</Text>

                </View>


                <View style={styles.ending}></View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: '#3A4752',
        },

        heading: {
            flex: 1,
            justifyContent: 'center',
        },
        headingText: {
            color: '#64E574',
            fontSize: 35,
            fontFamily: 'Cocogoose-Light',
            fontWeight: '100'

        }, 
         body: {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center'
        },
        bodyInputContainer:{
            width:300,
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal:10,
            marginVertical: 5,
            borderWidth: 1,
            borderColor: '#4E5D6A',
            borderRadius: 10,
            backgroundColor: '#4E5D6A',
            textAlign:'left',
            justifyContent:'center',
            alignItems:'center'


        },

        bodyInput: {
            flex:1,
            color: '#A6BCD0',
            fontSize:20,
            paddingHorizontal:10,

        },

        bodyText:{
            color: '#A6BCD0',
            fontSize:15,
        },

         ending: {
            flex: 1
        },


});
