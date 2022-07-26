import React, { useState,useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from "../components/Screen";
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from '../hooks/useApi';

function ListingScreen({navigation}) {

    const getListingsApi = useApi(listingApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);
     
    return (
        <>
        <ActivityIndicator visible={getListingsApi.loading} />
        <Screen style={styles.screen}>
            {
                getListingsApi.error && (<>
                <AppText>Couldn't retrieve the listing</AppText>
                <AppButton title="Retry" onPress={getListingsApi.request}/>
                </>
            )}
            <FlatList
            data={getListingsApi.data}
            keyExtractor={(listing)=> listing.id.toString()}
            renderItem={({item})=> 
                <Card
                    title={item.title}
                    subTitle={"$"+item.price}
                    imageUrl={item.images[0].url}
                    thumbnailUrl={item.images[0].thumbnailUrl}
                    onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
                />}
            />
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:colors.light,
    }
})
export default ListingScreen;