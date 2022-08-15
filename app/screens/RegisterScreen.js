import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import usersApi from "../api/users";
import authApi from "../api/auth";
import Screen from '../components/Screen';
import * as Yup from "yup";
import AppFormField from '../components/AppFormField';
import AppForm from "../components/AppForm";
import useApi from '../hooks/useApi';
import ErrorMessage from '../components/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema=Yup.object().shape({
    name:Yup.string().required().min(4).max(30).label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
});


function RegisterScreen() {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = userAuth();
    const [error, setError]=useState();

    const handleSubmit = async (userInfo)=>{
        const result = await registerApi.request(userInfo);

        if(!result.ok){
            if(result.data) setError(result.data.error);
            else{
                setError("An unexpected error occured.");
                console.log(result);
            }
            return ;
        }

        const {data: authToken}=await loginApi.request(
            userInfo.email,
            userInfo.password
        ); 
        auth.logIn(authToken);
    }

    return (
        <>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo5.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{name:"",email:"", password:""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible={error}/>
                <AppFormField
                    name="apps"
                    placeholder="Full Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    nametype="name"
                    textContentType="fullName"
                />
                <AppFormField
                    name="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    nametype="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="lock"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    nametype="password"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <SubmitButton
                    title='Register'
                />
            </AppForm>
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    logo:{
        height:120,
        width:120,
        alignSelf:"center",
        marginTop:50,
        marginBottom:50,
    },
    container:{
        padding:10,
    }
})

export default RegisterScreen;