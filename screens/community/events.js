import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { FlatList } from 'react-native-gesture-handler';
import db from '../../config'


export default class Events extends React.Component{

        constructor(props){
            super(props);
            this.state={
                events:[],
            }
        }



    getEventList=async()=>{
        var ref = await db.collection('events').get()
            ref.docs.map(doc=>{
                this.setState({
                    events:[...this.state.events, doc.data()]
                })
            })
            
        console.log(this.state.events)
    }


    renderItem=({item, index})=>{
        <ListItem key={index} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    }

    componentDidMount=async()=>{
        console.log('Mount')
        this.getEventList();
    }

    

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Events</Text>

                {console.log('Events')}

                <Text style={styles.eventTitle}>15 OCT - Dussehra</Text>

                <FlatList
                    data={this.state.events}
                    renderItem={({item})=>(
                        <View>
                            <Text>{'Event' + item.name}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index)=>index.toString()}
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
        backgroundColor:'#FFF7E4',
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
        color : '#FFB144',
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
    },
    eventTitle:{
        fontWeight:'bold',
        color:'#FFB8A1',
        textAlign:'center'
    }
})