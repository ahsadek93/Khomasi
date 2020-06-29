import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import Icon from 'react-native-vector-icons/Entypo';
import AppBtn from '../AppBtn'
import RangeSlider from 'rn-range-slider';



export default class PlacePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity:'',
            selectedCityIndex: '0',
            selectedCityAreas:['Please Select City First'],
            selectedArea:'Please Selecet Area',
            city: [
                {name:'Select City', area:['Please Select City First']},
                {name:'Cairo', area:['Please Select Area','Maadii','Nasr City','Zayton']},
                {name:'Giza', area:['Please Select Area','Haram','Zayed','October']},

            ]
        }

    };  

   getSelectedCityAreas = function(val){
        this.setState({
            selectedCity: val,
            selectedCityIndex: this.state.city.findIndex(p => p.name === val),
            })
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <View style={styles.headingRow}>
                        <Icon name="menu" size={40} color="#A6BCD0" />
                        <Image style={styles.headingImg}
                        source={{uri:'https://via.placeholder.com/200'}} />
                    </View>
                    <Text style={styles.headingText}>Where do you want to play?</Text>
                </View>
            
                <View style={styles.body}>
                    <Picker style={styles.bodyPicker}
                     selectedValue={this.state.selectedCity}
                     onValueChange={(val)=> this.getSelectedCityAreas(val)}>
                        {this.state.city.map((place, i) =>(
                            <Picker-Item label={place.name}
                             value={place.name}
                             key={`cityKey#-${i}`} />
                        )
                        )} 
                    </Picker>
                    <Picker style={styles.bodyPicker}
                    selectedValue={this.state.selectedArea}
                    onValueChange={(val) => this.setState({
                        selectedArea: val
                    })}>
                        {
                            this.state.city[this.state.selectedCityIndex].area.map((location, i) =>(
                                <Picker-Item label={location}
                                value={location}
                                key={`areaKey#-${i}`}
                                style={styles.bodyPickerItem} />
                            ))
                        }
                    </Picker>
                
                </View>
                <View style={styles.ending}>
                    <Text style={styles.endingText}>Select price Range</Text>
                    <RangeSlider
                    style={{width: 300, height: 80}}
                    gravity={'center'}
                    min={200}
                    max={1000}
                    step={20}
                    selectionColor="#CC9D76"
                    blankColor="#3F5756"
                    labelBackgroundColor="#3A4752"
                    labelBorderColor="#3A4752"	
                    labelTextColor="#CC9D76"
                    />    
                    <View style={styles.endingBtn}>
                    <AppBtn title="Search" />
                    </View>
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
        heading:{
            flex:1,
        },
        headingRow:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingVertical:10,
            paddingHorizontal:10

        },
        headingText: {
            color: '#64E574',
            fontSize: 25,
            fontFamily: 'Cocogoose-Light',
            fontWeight: '100',
            paddingVertical:20,


        }, 
        headingImg:{
            height:50,
            width:50,
            borderRadius: 150/2
        },

        body:{
            flex:1,
        },

        bodyPicker:{
            width:300,
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal:10,
            marginVertical: 5,
            borderWidth: 1,
            borderColor: '#4E5D6A',
            borderRadius: 20,
            backgroundColor: '#4E5D6A',
            textAlign:'left',
            justifyContent:'center',
            alignItems:'center',
            color:'#fff'
        },
        ending:{
            flex:2
        },
        endingText:{
            fontSize:20,
            color:'#A6BCD0'
        },
        endingBtn:{
            marginTop:50
        }
})

