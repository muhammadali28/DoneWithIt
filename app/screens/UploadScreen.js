import React from 'react';
import { View,StyleSheet, Modal } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({onDone, progress=0, visible=false}) {
    return (
        <Modal visible={visible}>
           <View style={styles.container}>
            {progress<1?(
                <ProgressBar color={colors.primary} progress={progress} width={200}/>
            ):(
                <LottieView onAnimationFinish={onDone} style={styles.done} autoPlay loop={false} source={require("../assets/animations/done.json")}/>
            )}
           
           </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
     alignItems:"center",
     justifyContent:"center",
     flex:1,
    },
    done:{
        width:150,
    }

})

export default UploadScreen;