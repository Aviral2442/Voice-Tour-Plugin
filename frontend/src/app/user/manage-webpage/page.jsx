'use client'
import React, { useState } from 'react'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Textarea
} from "@mantine/core"
import classes from './webPage.module.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useDisclosure } from "@mantine/hooks"
import { Modal } from "@mantine/core"
import WebpageTable from './webpageTable';
import useAppContext from '@/context/AppContext';
import { Jost } from 'next/font/google';
import clsx from 'clsx';

const font = Jost({ subsets: ['latin'], weight: ['100', '400'] });


const WebPage = () => {

  // model start
  const [opened, { open, close }] = useDisclosure(false)
  // model end

  const webpageValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required').min(3, 'Name is Too Short'),
    address: Yup.string().required('Address is Required').min(6, 'Address is Too Short'),
    description: Yup.string().required('Description is Required').min(8, 'Description is Too Short')
  });

  const { currentUser, setCurrentUser } = useAppContext();

  const webpageForm = useFormik({
    initialValues: {
      name: '',
      address: '',
      description: ''
    },
    onSubmit: (values) => {

      console.log(values);

      fetch('http://localhost:5000/webpage/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': currentUser.token
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('User Registered successfully');
            webpageForm.resetForm();

          } else {
            toast.error('Some Error Occured');
          }

        }).catch((err) => {
          console.log(err);
          toast.error('Some Error Occured');
        });


    },
    validationSchema: webpageValidationSchema
  });


  return (
    <>
      <Container fluid className={classes.Container}>

        <Modal opened={opened} onClose={close}   >
          <Container size={420} my={40} mt={20} >

            <Paper withBorder shadow="md" p={30} mt={30} radius="md" bg={"white"} className={classes.paper}>
              <Title ta="center" className={classes.title}>
                Webpage
              </Title>
              <form onSubmit={webpageForm.handleSubmit}>
                <TextInput
                  label="Name"
                  placeholder="Enter your name "
                  mt="md"
                  id="name"
                  onChange={webpageForm.handleChange}
                  value={webpageForm.values.name}
                  className="form-control"
                  error={webpageForm.touched.name && webpageForm.errors.name}
                />


                <TextInput label="Address"
                  placeholder="Enter your address"
                  mt="md"
                  id="address"
                  onChange={webpageForm.handleChange}
                  value={webpageForm.values.address}
                  className="form-control"
                  error={webpageForm.touched.address && webpageForm.errors.address}
                />


                <Textarea label="Description"


                  placeholder="Enter your description"
                  mt="md"
                  id="description"
                  onChange={webpageForm.handleChange}
                  value={webpageForm.values.description}
                  className="form-control"
                  error={webpageForm.touched.description && webpageForm.errors.description}
                />

                <Button type='submit' fullWidth mt="xl" variant='filled' color='black'
                  className={clsx(classes.control, font.className)}>
                  Submit WebPage
                </Button>
              </form>
            </Paper>
          </Container >
        </Modal>
        <center>
        <Button onClick={open} variant='white' color='black' mb={20}  mt={20}
          className={clsx(classes.control, font.className)}>
          Create Web Page
        </Button>

        <br />
  
        <WebpageTable />
        </center>

      </Container>
    </>
  )
}

export default WebPage;