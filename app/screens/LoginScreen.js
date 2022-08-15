import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';
import * as Yup from "yup";
import AppFormField from '../components/AppFormField';
import AppForm from "../components/AppForm";
import authApi from "../api/auth";
import useAuth from '../auth/useAuth';

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
});


function LoginScreen() {
    const {logIn} = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit=async({email,password})=>{
        const result= await authApi.login(email,password);
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);

        logIn(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo5.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{email:"", password:""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Sorry, Email or Password is not correct!" visible={loginFailed}/>
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
                    title='Login'
                />
            </AppForm>
        </Screen>
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

export default LoginScreen;