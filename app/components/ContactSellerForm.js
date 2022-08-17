import React from 'react';
import { View,StyleSheet, Keyboard, Alert } from 'react-native';
import messageAPi from '../api/messages';
import {Notifications} from 'expo';

function ContactSellerForm({listing}) {

    const handleSubmit = async({message},{resetForm})=>{
        Keyboard.dismiss();

        const result = await messageAPi .send(message.listingId);

        if(!result.ok){
            console.log("Error", result);
            return Alert.alert("Error", "Could not send the message to User!")
        }

        resetForm();

        Notifications.presentLocalNotificationAsync({
            title:"Awesome",
            body: "Your message was sent to seller.",
        });
    };
}

export default ContactSellerForm;