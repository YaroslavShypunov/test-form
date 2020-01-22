import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import TextFieldComponent from './components/TextFieldComponent';
import { Button, Box, Paper } from '@material-ui/core';

function App() {
  const NAME_REGEX = /^[a-zA-ZżŻźóÓąĄśćĆ]+(([',. -][a-zA-ZżŻźóÓąĄśćĆ ])?[a-zA-ZżŻźóÓąĄśćĆ]*)*$/;
  const LAST_NAME_REGEX = /^[a-zA-ZżŻźóÓąĄśćĆ0-9]+(([',. -][a-zA-ZżŻźóÓąĄśćĆ0-9 ])?[a-zA-ZżŻźóÓąĄśćĆ0-9]*)*$/;
  const AGE_REGEX = /^[1-9][0-9]*$/;
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(14, 'Must be 14 characters or less')
        .matches(NAME_REGEX, 'Must have just letters')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .matches(LAST_NAME_REGEX, 'Must have just letters or numbers')
        .required('Required'),
      age: Yup.string()
        .max(3, 'Must be 3 characters or less')
        .matches(AGE_REGEX, 'Can not start from 0')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(`
        First Name: ${values.firstName}
        Last Name: ${values.lastName}
        age: ${values.age}`
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box maxWidth='500px' m='auto' mt={4}>
        <Paper>
          <Box p={4}>
            <TextFieldComponent
              formikProps={formik}
              id="firstName"
              type="text"
              label='First Name'
              fullWidth
            />
            <TextFieldComponent
              formikProps={formik}
              id="lastName"
              type="text"
              label='Last Name'
              fullWidth
            />
            <TextFieldComponent
              formikProps={formik}
              id="age"
              type="number"
              label='Age'
              fullWidth
            />
            <Box m={2}>
              <Button color='primary' variant='contained' fullWidth type='submit'>Send</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </form>
  );
}

export default App;
