import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import  Swipeable  from "react-native-gesture-handler/Swipeable";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({title, subTitle, image, onPress,IconComponent ,renderRightActions}) {
    return (
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.textcontainer}>
                        <AppText style={styles.name} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subtitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        padding:10,
        backgroundColor:colors.white,
    },
    textcontainer:{
        flex:1,
        marginLeft:10,
        justifyContent:"center",
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    name:{
        fontWeight:"700",
        marginTop:10,
        marginBottom:5,
    },
    subtitle:{
        color:colors.medium,
    },
})

export default ListItem;