import React from 'react';
import { View,StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import defaultSyles from "../config/styles";

function AppTextInput({name,width="100%",...textstyle}) {
    return (
        <View style={[styles.container, {width}]}>
            {name && <MaterialCommunityIcons name={name} style={styles.icon} color={colors.medium} size={25}/>}
            <TextInput placeholderTextColor={colors.medium} style={defaultSyles.text} {...textstyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        padding:15,
        borderRadius:25,
        marginVertical:10,
        flexDirection:"row",
        marginHorizental:5,
    },
    icon:{
        marginRight:10,
    },
})

export default AppTextInput;