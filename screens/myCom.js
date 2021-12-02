import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default class MyCom extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>My Community</Text>
                
                <TouchableOpacity 
                    style={styles.categories}
                    onPress={()=>{
                        this.props.navigation.navigate('Services')
                    }}
                >
                    <Text style={styles.buttonText}>Services</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.categories}
                    
                    onPress={()=>{
                        console.log('Events')
                        this.props.navigation.navigate('Events')
                    }}
                >
                    <Text style={styles.buttonText}>Events</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.categories}
                    onPress={()=>{
                        this.props.navigation.navigate('Notice')
                    }}
                >
                    <Text style={styles.buttonText}>Notice Board</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EBF2FA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontWeight:'bold',
        color:'#1B1F3B'
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#034732',
        fontWeight:'bold'
      },
    categories:{
        width:300,
        height:45,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:25,
        backgroundColor:"#CAFFD0",
        shadowColor: "#FCEFF9",
        borderColor:'#84B59F',
        borderWidth:2
    },
})