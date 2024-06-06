'use client';
import { Button, Center, Container, Modal, Paper, TextInput, Textarea, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import WebpageTable from '../../manage-webpage/webpageTable'
import classes from './updatewebpage.module.css'
import { Jost, Rammetto_One } from 'next/font/google'
import { useParams, useRouter } from 'next/navigation'
import useAppContext from '@/context/AppContext';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import toast from 'react-hot-toast';


const font = Jost({ subsets: ['latin'], weight: ['100', '400'] });
const fonts = Rammetto_One({ subsets: ['latin'], weight: ['400'] });


const UpdateWebpage = () => {

  const { id } = useParams();
  const [updateWebpageData, setUpdateWebpage] = useState(null);
  const router = useRouter();

  const fetchWebpagetData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/getbyid/` + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUpdateWebpage(data);
    //to set the initial values of the form
    webpageForm.setValues(data);
  }

  useEffect(() => {
    fetchWebpagetData();
  }, [])



  const webpageValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required').min(3, 'Name is Too Short'),
    address: Yup.string().required('Address is Required').min(5, 'Address is Too Short'),
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

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/update/` + id, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': currentUser.token,
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Webpage Updated successfully');
            router.push("/user/manage-webpage");

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
      <Container fluid className={classes.Container} >

        <Container my={40} mt={20} fluid  >

          <Paper withBorder shadow="md" p={30} mt={30} radius="md" className={classes.paper}>
            <Title ta="center" mb={70} className={clsx(classes.title,fonts.className)}>
            <span style={{color:'white'}}>Update</span>  Webpage
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
                mb={30}
              />


              <TextInput label="Address"
                placeholder="Enter your address"
                mt="md"
                id="address"
                onChange={webpageForm.handleChange}
                value={webpageForm.values.address}
                className="form-control"
                error={webpageForm.touched.address && webpageForm.errors.address}
                mb={30}
              />


              <Textarea label="Description"
                placeholder="Enter your description"
                mt="md"
                id="description"
                onChange={webpageForm.handleChange}
                value={webpageForm.values.description}
                className="form-control"
                error={webpageForm.touched.description && webpageForm.errors.description}
                mb={70}
              />

              <Button type='submit' fullWidth mt="xl" variant='filled' color='black'
                className={clsx(classes.control, font.className)}>
                Update 
              </Button>
            </form>

          </Paper>
        </Container >
      </Container>
    </>
  )
}

export default UpdateWebpage