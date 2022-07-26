import React from 'react';
import { ImageBackground, View ,StyleSheet, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/bg1.jpg')}
        blurRadius={8}
        >
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo5.png")} />
                <Text style={styles.tagline}>Sell what you don't need!</Text>
            </View>
            <View style={styles.buttoncont}>
                <AppButton title="Login"/>
                <AppButton title="Register" color="secondary"/>
            </View>
        </ImageBackground>  
        
    );
}

const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent: "flex-end",
        alignItems:"center",
    },
    container:{
        position: "absolute",
        top:70,
        alignItems:"center"
    },
    logo:{
        height:120,
        width:120,
    },
    buttoncont:{
        width:"100%",
        padding:20,
    },
    tagline:{
        fontSize:20,
        fontWeight:"600",
        paddingVertical:10
    },
})
export default WelcomeScreen;