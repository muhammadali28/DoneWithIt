import React,{useEffect} from 'react';
import { View,StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import * as ImagePicker from "expo-image-picker";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ImageInput({imageUri, onChangeImage}) {
    
useEffect(() => {
    imageFunction();
}, []);

const imageFunction= async()=>{
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!result.granted)alert("You have to give access permission to add photos!")
};

const handlePress=()=>{
    if(!imageUri){ selectImage();}
    else
        Alert.alert("Delete", "Are you sure you want to delete",[
            {text:"Delete",onPress: ()=> onChangeImage(null)},
            {text:"No"},
        ])
}

const selectImage=async()=>{
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            quality:0.5
        });
        if(!result.cancelled)
            onChangeImage(result.uri);

    } catch (error) {
        console.log("Error occured",error)
    }
};

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons name="camera" size={35} color={colors.medium} />)}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        width:100,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden",
        borderRadius:15,
    },
    image:{
        height:100,
        width:100,
    },
})

export default ImageInput;