import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';

function Icon({name, size=50, iconColor=colors.white, backgroundColor=colors.black}) {
    return (
        <View style={{
            height:size,
            width:size,
            backgroundColor,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:size/2,
            }}>
            <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor}/>
        </View>
    );
}

export default Icon;