import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ListingScreen from '../screens/ListingScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator=()=>(
    <Stack.Navigator mode="modal">
        <Stack.Screen name={routes.LISTING} component={ListingScreen} options={{headerShown:false,}}/>
        <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;
