import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import {Image} from "react-native-expo-image-cache";

function Card({title, subTitle, imageUrl, thumbnailUrl,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.cardimage} uri={imageUrl} preview={{uri:thumbnailUrl}} tint="light" />
                <View style={styles.textcontainer}>
                    <AppText>{title}</AppText>
                    <AppText style={styles.subtitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        borderRadius:15,
        marginBottom:20,
        overflow:"hidden",
    },
    cardimage:{
        width:"100%",
        height:200,       
    },
    textcontainer:{
        padding:20,
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:"bold",
        marginTop:10,
    },
});

export default Card;