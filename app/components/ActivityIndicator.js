import React from 'react';
import { View,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

function ActivityIndicator({visible}) {
    if(!visible) return null;

    return (
        <LottieView 
        source={require("../assets/animations/loading.json")}
        autoPlay
        loop
        style={styles.load}
        />
    );
}

const styles = StyleSheet.create({
    load:{
     height:350,
     width:350,
},
})

export default ActivityIndicator;