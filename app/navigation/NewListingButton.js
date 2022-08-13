import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" size={50} color={colors.white}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        bottom:30,
        height:80,
        width:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
        borderWidth:5,
        borderColor:colors.white,
},
})

export default NewListingButton;