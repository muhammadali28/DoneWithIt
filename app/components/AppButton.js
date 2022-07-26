import React, { useState } from 'react';
import {Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from "../config/colors";
import AppText from "../components/AppText";

function AppButton({title, onPress, color="primary"}) {
    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:colors[color]}]} onPress={onPress}>
           <View>
                <Text style={styles.buttontext}>{title}</Text>
           </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
       backgroundColor:colors.primary,
       width:"100%",
       borderRadius:25,
        height:50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical:10, 
    },
    buttontext:{
        fontSize:18,
        fontWeight:"bold",
        color:colors.white,
        alignSelf:"center",
    },
})
export default AppButton;