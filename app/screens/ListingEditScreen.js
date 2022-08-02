import React from 'react';
import { StyleSheet, Image } from 'react-native';
import SubmitButton from '../components/SubmitButton';

import Screen from '../components/Screen';
import * as Yup from "yup";
import AppFormField from '../components/AppFormField';
import AppForm from "../components/AppForm";
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema=Yup.object().shape({
    title:Yup.string().required().min(1).label("Title"),
    price:Yup.string().required().min(1).max(10000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.string().required().nullable().label("Category"),
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
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{title:"", price:"",category: null,description:"",images:[]}}
                onSubmit={(values)=>console.log(location)}
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