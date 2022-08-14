import React from 'react';
import {useFormikContext} from "formik";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from './AppTextInput';

function AppFormField({nametype,width,...argument}) {
    const {setFieldTouched,setFieldValue,touched, errors,values}=useFormikContext();
    return (
    <>
         <AppTextInput
            onBlur={()=>setFieldTouched(nametype)}
            onChangeText={text=>setFieldValue(nametype,text)}
            value={values[nametype]}
            width={width}
            {...argument}
        />
        <ErrorMessage error={errors[nametype]} visible={touched[nametype]}/>
    </>
    );
}

export default AppFormField;