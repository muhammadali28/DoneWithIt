import React from 'react';
import { StyleSheet, Image } from 'react-native';
import SubmitButton from '../components/SubmitButton';

import Screen from '../components/Screen';
import * as Yup from "yup";
import AppFormField from '../components/AppFormField';
import AppForm from "../components/AppForm";

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
});


function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo5.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{email:"", password:""}}
                onSubmit={(values)=>console.log(values)}
                validationSchema={validationSchema}
            >
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