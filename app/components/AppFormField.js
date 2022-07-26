import React from 'react';
import {useFormikContext} from "formik";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from './AppTextInput';

function AppFormField({nametype,width,...argument}) {
    const {setFieldTouched,touched, errors, handleChange}=useFormikContext();
    return (
    <>
         <AppTextInput
            onBlur={()=>setFieldTouched(nametype)}
            onChangeText={handleChange(nametype)}
            width={width}
            {...argument}
        />
        <ErrorMessage error={errors[nametype]} visible={touched[nametype]}/>
    </>
    );
}

export default AppFormField;