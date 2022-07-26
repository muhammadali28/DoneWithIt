import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from "../components/Screen";
import Card from '../components/Card';
import colors from '../config/colors';

const initalLists=[
    {
        id:1,
        title:"Red Jacket",
        price:"100",
        image:require("../assets/card1.jpg"),
    },
    {
        id:2,
        title:"Wooden Chair",
        price:"200",
        image:require("../assets/card2.jpg"),
    },
    {
        id:3,
        title:"Sofa ",
        price:"500",
        image:require("../assets/card3.jpg"),
    }
]

function ListingScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data={initalLists}
            keyExtractor={(initalList)=> initalList.id.toString()}
            renderItem={({item})=> 
                <Card
                    title={item.title}
                    subTitle={"$"+item.price}
                    image={item.image}
                />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:colors.light,
    }
})
export default ListingScreen;