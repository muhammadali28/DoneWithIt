import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from '../navigation/AuthNavigator';
import navigationTheme from "../navigation/navigationTheme";
import AppNavigator from "../navigation/AppNavigator";

export default function Practice(){
return (
    <NavigationContainer theme={navigationTheme}>
        <AppNavigator/>
    </NavigationContainer>
);
}

