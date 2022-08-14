import React from 'react';
import { View,StyleSheet } from 'react-native';
import AppText from './AppText';
import { useNetInfo } from '@react-native-community/netinfo';
import  Constants  from 'expo-constants';
import colors from '../config/colors';

function OfflineNotice({props}) {
    
    const netInfo = useNetInfo();
    if(netInfo.type !== "unknown" && netInfo.isInternetReachable===false)
    return (
        
        <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection!</AppText>
        </View>

    );

    return null;
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:50,
        width:"100%",
        zIndex:1,
        top:Constants.statusBarHeight,
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:colors.white,
    }
})

export default OfflineNotice;