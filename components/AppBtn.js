import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AppBtn extends Component {
    render(){
        return(
            <AppButton
            title={this.props.title}
            onPress={this.props.onPress}
            name={this.props.name}
            />
        )
    }


    
}


const AppButton = ({ onPress, title, name }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Icon name={name} size={20} color="#fff" />
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    elevation: 1,
    backgroundColor: "#64E574",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingHorizontal: 5,
  }
});