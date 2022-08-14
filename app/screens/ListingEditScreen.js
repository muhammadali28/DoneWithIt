import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import SubmitButton from '../components/SubmitButton';

import Screen from '../components/Screen';
import * as Yup from "yup";
import AppFormField from '../components/AppFormField';
import AppForm from "../components/AppForm";
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from "../api/listings";
import UploadScreen from './UploadScreen';

const validationSchema=Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.number().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category"),
    images:Yup.array().min(1,"Please select atleast one image.")
});

const categories=[
    {label:"Furniture", value:1, backgroundColor:"red", icon:"email"},
    {label:"Computers", value:2, backgroundColor:"blue", icon:"lock"},
    {label:"Clothes", value:3, backgroundColor:"yellow", icon:"trash-can"},
    {label:"Electronics", value:4, backgroundColor:"green", icon:"apps"},
    {label:"Sports", value:5, backgroundColor:"orange", icon:"email"},
    {label:"Shoes", value:6, backgroundColor:"purple", icon:"lock"},
];

function ListingEditScreen() {

    const location = useLocation();
    const [uploadVisible,setUploadVisible]=useState(false);
    const [progress,setProgress]=useState(0);

    const handleSubmit= async (listing,{resetForm})=>{
        
        setProgress(0);
        setUploadVisible(true);
        const result= await listingsApi.addListing({...listing, location},
            (progress)=>setProgress(progress));

        if(!result.ok){
            setUploadVisible(false);
            return alert('Could not save the listing.');
        }

        resetForm();
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen onDone={()=> setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
            <AppForm
                initialValues={{title:"", price:"",category: null,description:"",images:[]}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker
                    name="images"
                />
                <AppFormField
                    placeholder="Title"
                    maxLength={255}
                    nametype="title"
                />
                <AppFormField
                    nametype="price"
                    placeholder="Price"
                    maxLength={8}
                    keyboardType="numeric"    
                    width={120}              
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                />
                <AppFormField
                    nametype="description"
                    placeholder="Description"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                />
                <SubmitButton
                    title='Post'
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

export default ListingEditScreen;