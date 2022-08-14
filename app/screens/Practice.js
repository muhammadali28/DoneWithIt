import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from '../navigation/AuthNavigator';
import navigationTheme from "../navigation/navigationTheme";
import AppNavigator from "../navigation/AppNavigator";
import OfflineNotice from "../components/OfflineNotice";

export default function Practice(){
return (
    <>
        <OfflineNotice/>
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator/>
        </NavigationContainer>
    </>
);
}

