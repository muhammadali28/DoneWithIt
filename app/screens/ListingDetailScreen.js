import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import {Image} from "react-native-expo-image-cache";
import ContactSellerForm from '../components/ContactSellerForm';
import KeyboardAvoidingView from "react-native";

function ListingDetailScreen({route}) {

    const listing=route.params;
    
    return (
        <KeyboardAvoidingView 
            behavior="position"
            keyboardVerticalOffset={Platform.OS=== "ios" ? 0 : 100}
        >
            <Image style={styles.cardimage} uri={listing.images[0].url} preview={{uri: listing.images[0].thumbnailUrl}} tint="light"/>
            <View style={styles.textcontainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.subtitle}>${listing.price}</AppText>
                <View style={styles.persondetails}>
                    <ListItem
                        image={require("../assets/p1.jpg")}
                        title="Muhammad Ali"
                        subTitle="10 Listings"
                    />
                </View>
                <ContactSellerForm listing={listing}/>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    cardimage:{
        width:"100%",
        height:200,       
    },
    textcontainer:{
        padding:20,
    },
    title:{
        fontWeight:"700",
        fontSize:20,       
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:"bold",
        marginTop:10,
    },
    persondetails:{
        marginVertical:30,
    },
});

export default ListingDetailScreen;