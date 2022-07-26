import React,{useState} from 'react';
import { View,StyleSheet, TextInput,TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import AppText from "./AppText";
import Screen from './Screen';
import PickerItem from "./PickerItem";


function AppPicker({name, placeholder, items,numberOfColumns=1, PickerItemComponent = PickerItem , selectedItem, onSelectItem}) {
    
    const [isType,setIsType]= useState(false);
    
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setIsType(true)}>
            <View style={styles.container}>
                {name && <MaterialCommunityIcons name={name} style={styles.icon} color={colors.medium} size={25}/>}
                {selectedItem ? 
                    (<AppText style={styles.text} >{selectedItem.label}</AppText>
                    ):(
                     <AppText style={styles.placeholder}>{placeholder}</AppText>
                )}
                <MaterialCommunityIcons name={"chevron-down"} color={colors.medium} size={25}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={isType} animationType="slide">
            <Screen>
                <Button
      
                    title="Close"
                    onPress={()=>setIsType(false)}   
                /> 
                <FlatList
                    data={items}
                    keyExtractor={(item)=>item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item})=>
                        <PickerItemComponent
                            item={item}
                            onPress={()=>{
                                setIsType(false);
                                onSelectItem(item);
                            }}
                        />
                 }
                />
            </Screen>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        padding:15,
        borderRadius:25,
        width:"100%",
        marginVertical:15,
        flexDirection:"row",
        marginHorizental:5,
    },
    icon:{
        marginRight:10,
    },
    text:{
        flex:1,
        fontWeight:"bold",
    },
    placeholder:{
        color:colors.medium,
        flex:1,
    }
})

export default AppPicker;