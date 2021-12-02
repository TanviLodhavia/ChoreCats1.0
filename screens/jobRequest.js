import React from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import db from '../config'
import firebase from 'firebase'
//import BottomNavigator from '../components/bottomTabNavigation'

export default class JobRequest extends React.Component{

    constructor(){
        super();
        this.state={
            job:'',
            charges:'',
            refName:'',
            refBlockNo:'',
            temp:'',
            admin:'',
            jobTitle:'clean',
            userID:firebase.auth().currentUser.email
        }
    }

    //add username along with user-id later

    addJob=()=>{
        db.collection('jobs').add({
            job:this.state.job,
            charges:this.state.charges,
            refName:this.state.refName,
            refBlockNo:this.state.refBlockNo,
            userID:this.state.userID,
            jobtitle:this.state.jobTitle,
            
        })
    }

    tempAdmin=()=>{
        db.collection('admin').add({
            temp:this.state.temp,
            admin:this.state.admin
        })
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.title}>Request Job</Text>


                <Input
                    placeholder="I can..."
                    leftIcon={
                        <Icon
                        type="feather"
                        name="briefcase"
                        color="#034732"
                        />               
                    }
                    onChangeText={(job)=>{
                        this.setState({
                            job:job
                        })
                    }}
                />

                <Input
                    placeholder="Charges"
                    leftIcon={
                        <Icon
                        type="font-awesome-5"
                        name="wallet"
                        color="#034732"
                        />               
                    }
                    onChangeText={(charges)=>{
                        this.setState({
                            temp:charges
                        })
                    }}
                />

                <Input
                    placeholder="Reference Name"
                    leftIcon={
                        <Icon
                        type='feather'
                        name='at-sign'
                        color="#034732"
                        />
                    }
                    onChangeText={(name)=>{
                        this.setState({
                            refName:name
                        })
                    }}
                />

                <Input
                    placeholder="Reference Block Number"
                    keyboardType={'numeric'}
                    leftIcon={
                        <Icon
                        type='font-awesome-5'
                        name='address-book'
                        color="#034732"/>
                    }
                    onChangeText={(refNo)=>{
                        this.setState({
                            refBlockNo:refNo
                        })
                    }}
                />

               
               <DropDownPicker
                    placeholder='Select a Job'
                    containerStyle={{backgroundColor:'#000FF'}}
                    items=
                    {[
                            {label:"Cook",value:'Cook'},
                            {label:'Maid', value:'Maid'}
                    ]}
                    
                    defaultValue={this.state.jobTitle}
                    min={1}
                    max={5}
                    dropDownMaxHeight={200}
                    onChangeItem={(item)=>{
                        console.log(item.label, item.value)
                        this.setState({
                            jobTitle:item.value,
                        })
                    }}
                />
                


                <TouchableOpacity 
                onPress={()=>{
                    this.addJob();
                }}
                style={styles.button}>
                    <Text style={styles.buttonText}>Add Request</Text>
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
        color : '#853355',
        fontWeight:'bold'
      },
    button:{
        width:300,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:25,
        backgroundColor:"#EF476F",
        shadowColor: "#FCEFF9",
        }
})