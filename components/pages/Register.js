import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppBtn from '../AppBtn'

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                fullName:'',
                mobile:'',
                email:'',
                password:'',
                rePassword:''
            }
        };
    }




    render(){
        return (
            <View style={styles.container} > 
                <View style={styles.heading}>
                    <Text style={styles.headingText}> Create Account </Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.bodyInputContainer}>
                        <Icon name="user" size={20} color="#A6BCD0" />
                        <TextInput style={styles.bodyInput}
                        placeholder="Full Name"
                        onChangeText={(val)=> this.setState({
                            userData:{
                                ...this.state.userData,
                                fullName:val
                            }
                        })}
                        />
                    </View>

                     <View style={styles.bodyInputContainer}>
                        <Icon name="mobile" size={20} color="#A6BCD0" />
                        <TextInput style={styles.bodyInput}
                        placeholder="Mobile Number"
                        onChangeText={(val)=> this.setState({
                            userData:{
                                ...this.state.userData,
                                mobile:val
                            }
                        })}
                        />
                    </View>


                    <View style={styles.bodyInputContainer}>
                        <Icon name="envelope" size={20} color="#A6BCD0" />
                        <TextInput style={styles.bodyInput}
                        placeholder="Email"
                        onChangeText={(val)=> this.setState({
                            userData:{
                                ...this.state.userData,
                                email:val
                            }
                        })}
                        />
                    </View>
                    
                    <View style={styles.bodyInputContainer}>
                        <Icon name="lock" size={20} color="#A6BCD0" />
                        <TextInput style={styles.bodyInput}
                        placeholder="Passwrod"
                        onChangeText={(val)=> this.setState({
                            userData:{
                                ...this.state.userData,
                                password:val
                            }
                        })}
                        secureTextEntry={true}
                        />
                    </View>
                    
                    <View style={styles.bodyInputContainer}>
                        <Icon name="lock" size={20} color="#A6BCD0" />
                        <TextInput style={styles.bodyInput}
                        placeholder="Re Passwrod"
                        onChangeText={(val)=> this.setState({
                            userData:{
                                ...this.state.userData,
                                rePassword:val
                            }
                        })}
                        secureTextEntry={true}
                        />
                    </View>

                    <Text style={styles.bodyText}>Already have an Account? Sign In</Text>

                </View>


                <View style={styles.ending}>
                    <AppBtn name="arrow-right" title="Create Account" />
                </View>
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
            flex: 2,
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
            color: '#64E574',
            fontSize:15,
        },

         ending: {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center'
        },

        


});
