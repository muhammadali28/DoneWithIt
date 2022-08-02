import React from 'react';
import {useFormikContext} from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from './AppPicker';

function AppFormPicker({items, name, numberOfColumns , placeholder, PickerItemComponent}) {    
    
    const {setFieldValue,touched, errors, values}=useFormikContext();
    return (
    <>
        <AppPicker
            items={items}
            numberOfColumns={numberOfColumns}
            placeholder={placeholder}
            PickerItemComponent={PickerItemComponent}
            selectedItem={values[name]}
            onSelectItem={(item)=>setFieldValue(item)}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
    );
}

export default AppFormPicker;