import React, { useEffect, useState } from 'react';
import Screen from "../components/Screen";
import ImageInputList from '../components/ImageInputList';

function Practice(){

const [getImages, setGetImages]=useState([]);

const RemoveImage=(uri)=>{
    setGetImages(getImages.filter((imageUri)=>imageUri!==uri));
}

const AddImages=(uri)=>{
    setGetImages([...getImages, uri]);
}

return (
    <Screen>         
        <ImageInputList 
            imageUris={getImages}
            onRemove={RemoveImage}
            onAdd={AddImages}
        />
    </Screen>
);
}

export default Practice;