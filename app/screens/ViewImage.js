import React from 'react';
import { Image, View, StyleSheet, Text, Button } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';

function ViewImage(props) {
    return (
       <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
            </View>

            <Image
            resizeMode='contain'
            style={styles.image}
            source={require("../assets/background.jpg")}
            />
       </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:colors.primary,
        position:"absolute",
        top:20,
        left:20,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
    },
    container:{
        backgroundColor:"black",
        flex:1,
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:colors.secondary,
        position:"absolute",
        top:20,
        right:20,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
    },
    image:{
        width:"100%",
        height:"100%"
    },
})

export default ViewImage;