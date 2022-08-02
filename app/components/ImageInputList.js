import React, { useRef } from 'react';
import { View,StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris=[], onRemove, onAdd}) {

    const scrollView=useRef();
    return (
        <View>
            <ScrollView horizontal ref={scrollView} onContentSizeChange={()=>scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map((uri)=>(
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={()=>onRemove(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri)=>onAdd(uri)}/>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
},
    image:{
        marginRight:10
    }
})

export default ImageInputList;