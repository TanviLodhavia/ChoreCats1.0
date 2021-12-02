import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import db from '../../../config';


export default class Clean extends React.Component{

    constructor()
    {
        super();
        this.state=
        {
            jobTitle:[]
        }
    }

    readJobs =async()=>{
        const query = await db.collection('jobs').where("jobtitle", "==", "Cook").get()
        query.docs.map
        (
            doc=>{
                this.setState({
                    jobTitle:[...this.state.jobTitle,doc.data]
                })
            }
        )

        console.log(this.state.jobTitle)
    }

    renderItem=({item, index})=>
    {
        <ListItem key={index} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.jobtitle}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    }

    componentDidMount(){
        console.log('Mounted')
        this.readJobs();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Clean</Text>

                {console.log('Events')}

                <FlatList
                data={this.state.jobTitle}
                renderItem={({item})=>(
                    <View>
                        <Text>{'Help' + item.jobtitle}</Text>
                    </View>
                )}
                keyExtractor={(item,index)=>index.toString()}
                />







                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Services')
                    }}>
                        <Text>Back</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems: 'center'
    },
    title:{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#853355',
        fontWeight:'bold'
    },
})