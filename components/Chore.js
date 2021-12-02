import React from 'react';
import LottieView from 'lottie-react-native'

export default class Chores extends React.Component{
    render(){
        return(
            <LottieView
            source={require('../assets/41248-cleaning-the-floor-to-destroy-germs.json')}
            style={{width:'60%'}}
            autoPlay loop/>
        )
    }
}