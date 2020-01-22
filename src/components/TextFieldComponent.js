import React from 'react'
import { Box, TextField} from '@material-ui/core';

const TextFieldComponent = ({ multiline, customHelperText, label, fullWidth, type, color, formikProps, id, onBlur = () => { }, onChange = () => { } }) => {
    const value = formikProps.values[id];
    const error = formikProps.errors[id];
    const touched = formikProps.touched[id];
    const isError = () => {
        return error && Boolean(touched) ? true : false
    }
    const handleBlur = (event) => {
        onBlur(event);
        formikProps.handleBlur(event)
    }
    const handleChange = (event) => {
        onChange(event);
        formikProps.handleChange(event)
    }
    return (
        <Box>
            <TextField
                error={customHelperText ? Boolean(customHelperText) : isError()}
                label={label}
                margin="normal"
                fullWidth={fullWidth}
                multiline={multiline}
                type={type}
                name={id}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                helperText={customHelperText ? customHelperText : isError() ? error : ''}
            />
        </Box>
    )
}


export default TextFieldComponent;