import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailScreen() {
    return (
        <View>
            <Image style={styles.cardimage} source={require("../assets/card1.jpg")}/>
            <View style={styles.textcontainer}>
                <AppText style={styles.title}>Red jacket for sale!</AppText>
                <AppText style={styles.subtitle}>$100</AppText>
                <View style={styles.persondetails}>
                    <ListItem
                        image={require("../assets/p1.jpg")}
                        title="Muhammad Ali"
                        subTitle="10 Listings"
                    />
                </View>
            </View>
        </View>
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