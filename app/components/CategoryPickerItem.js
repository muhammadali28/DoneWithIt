import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from "./Icon";
function CategoryPickerItem({item, onPress}) {
    return  <View style={styles.container} onPress={onPress} >
                <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80}/>
                <AppText style={styles.label}>{item.label}</AppText>
            </View>;
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:"center",
        width:"33%",
    },
    label:{
        marginTop:5,
        textAlign:"center",
    }
})

export default CategoryPickerItem;