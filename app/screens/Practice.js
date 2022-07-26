import React, { useState } from 'react';
import Screen from "../components/Screen";
import AppTextInput from '../components/AppTextInput';
import AppPicker from "../components/AppPicker";

const categories=[
    {
        label:"Furniture",
        value:1
    },
    {
        label:"Computers",
        value:2
    },
    {
        label:"Clothes",
        value:3
    }
];

function Practice(){

    const[category,setCategory]=useState(categories[0]);

    return (
        <Screen>
            <AppPicker
                name="apps"
                placeholder="Categories"
                items={categories}
                selectedItem={category}
                onSelectItem={(item)=>setCategory(item)}
            />
            <AppTextInput
                name="email"
                placeholder="Enter email"
            />            
        </Screen>
    );
}

export default Practice;