'use client';
import React from 'react'
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container, Box } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';
import Navbar from '../navbar';
import { Footer } from '../footer';
import { Input } from 'postcss';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from "yup";
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';

const font = Josefin_Sans({ subsets: ['latin'], weight: ['100', '400'] });

const Contact = () => {

  const contactFormvalidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Messgae is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    onSubmit: (values) => {
      console.log(values);

      fetch('http://localhost:5000/contactForm/contact/', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Message sent successfully');
            formik.resetForm();
          } else {
            toast.error('Message not sent');
          }

        }).catch((err) => {
          console.log(err);
          toast.error('Message not sent');

        });
    },

    validationSchema: contactFormvalidationSchema,

  });

  return (
    <Box >
      <Navbar />

      <Container size={1000} mt={120} mb={120}>
        <Paper shadow="md" radius="lg" >
          <div className={classes.wrapper}>
            <div className={classes.contacts}>
              <Text fz="lg" fw={700} className={clsx(classes.title,font.className)} c="black">
                Contact Details
              </Text>

              <ContactIconsList />
            </div>

            <form className={classes.form} onSubmit={(formik.handleSubmit)}>
              <Text fz="lg" fw={700} className={clsx(classes.title,font.className)}>
                Get in touch
              </Text>

              <div  className={clsx(classes.fields,font.className)}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <div>
                    <TextInput
                      label="Your name"
                      placeholder="Your name"
                      required
                      id='name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 text-xs">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div>
                    <TextInput
                      label="Your email"
                      placeholder="hello@gmail.com"
                      required
                      id='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-xs">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </SimpleGrid>

                <div>
                  <TextInput
                    mt="md"
                    label="Subject"
                    placeholder="Subject"
                    required
                    id='subject'
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <div className="text-red-500 text-xs">{formik.errors.subject}</div>
                  ) : null}
                </div>

                <div>
                  <Textarea
                    mt="md"
                    label="Your message"
                    placeholder="Please include all relevant information"
                    minRows={3}
                    required
                    id='message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 text-xs">{formik.errors.message}</div>
                  ) : null}
                </div>

                <Group justify="flex-end" mt="md">
                  <Button type="submit" variant='outline' color='#66ff00'
                    className={classes.control}>
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Container>

      <Footer />
    </Box>
  )
}

export default Contact