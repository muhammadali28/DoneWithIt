import React,{useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from '../navigation/AuthNavigator';
import navigationTheme from "../navigation/navigationTheme";
import AppNavigator from "../navigation/AppNavigator";
import OfflineNotice from "../components/OfflineNotice";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import {AppLoading} from "expo";
import {navigationRef} from "../navigation/rootNavigation";

export default function Practice(){
    const[user,setUser] = useState();
    const[isReady,setIsReady] = useState(false);

    const restoreUser=async()=>{
        const user = await authStorage.getUser();
        if(user) setUser(user);
    }

    if(!isReady) 
        return (<AppLoading startAsync={restoreUser} onFinish={()=>setIsReady(true)}/>
        );

    return (
        <AuthContext.Provider value={{user,setUser}}>
            <OfflineNotice/>
            <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                {/* {user ? <AppNavigator/> : <AuthNavigator/>} */}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

