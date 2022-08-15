import React from 'react';
import { View,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import colors from '../config/colors';

function ActivityIndicator({visible}) {
    if(!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView 
            source={require("../assets/animations/loading.json")}
            autoPlay
            loop
            style={styles.load}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    load:{
     height:350,
     width:350,
    },
    overlay:{
        height:"100%",
        width:"100%",
        backgroundColor:colors.white,
        position:"absolute",
        zIndex:1,
        opacity:0.8,
    }
})

export default ActivityIndicator;