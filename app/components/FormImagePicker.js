import React from 'react';
import {useFormikContext} from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from './AppPicker';
import ImageInputList from './ImageInputList';

function FormImagePicker({name}) {
    
    const {setFieldValue,touched, errors, values}=useFormikContext();
    
    const imageUris=values[name];

    const RemoveImage=(uri)=>{
        setFieldValue(name,imageUris.filter((imageUri)=>imageUri!==uri));
    }
    
    const AddImages=(uri)=>{
        setFieldValue(name,[...imageUris, uri]);
    }

    return (
    <>
        <ImageInputList
           imageUris={imageUris}
           onAdd={AddImages}
           onRemove={RemoveImage}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
    );
}

export default FormImagePicker;