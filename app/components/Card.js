import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.card}>
                <Image style={styles.cardimage} source={props.image}/>
                <View style={styles.textcontainer}>
                    <AppText>{props.title}</AppText>
                    <AppText style={styles.subtitle}>{props.subTitle}</AppText>
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