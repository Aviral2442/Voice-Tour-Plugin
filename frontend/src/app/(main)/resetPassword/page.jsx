'use client';
import { enqueueSnackbar } from 'notistack';
import React, { useRef, useState } from 'react';
import classes from './resetpassword.module.css';
import {  Button, Container, Image, Paper, PasswordInput, TextInput, Title, rem } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

const ResetPassword = () => {

  const emailRef = useRef(null);
  const otpRef = useRef(null);
  const [verifiedUser, setVerifiedUser] = useState(null);

  const [showForm, setShowForm] = useState(false);

  // const navigate = useNavigate();
  const router = useRouter();

  const checkMailExists = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/getbymail/${emailRef.current.value}`);
    // console.log(res.status);
    const data = await res.json();
    // console.log(data);
    setVerifiedUser(data);
    return res.status === 200;
  }

  const sendOTP = async () => {
    if (!await checkMailExists()) {
      enqueueSnackbar('Email not registered', { variant: 'error' });
      return;
    }
    const res = await fetch(`${import.meta.env.VITE_API_URL}/util/sendotp`, {
      method: 'POST',
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    if (res.status === 201) {
      enqueueSnackbar('OTP sent successfully', { variant: 'success' });
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  }

  const verifyOTP = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
    // console.log(res.status);
    if (res.status === 200) {
      setShowForm(true);
    } else {
      enqueueSnackbar('Invalid OTP', { variant: 'error' });
    }
  }

  const updatePassword = async (values) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/update/${verifiedUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('Password updated successfully', { variant: 'success' });
      router.push('/login');
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  }

  const resetForm = useForm({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validate: {
      password: (value) => (value.length < 3 ? 'Password is too short' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <>
      <Paper className={classes.bg} >
        <Container w={'100%'} size={490} mt={200} className={classes.Container}>

          <Title order={1} mb={30} style={{ textAlign: 'center' }}>
            Reset Your Password
          </Title>

          <TextInput
            required
            label="Enter Registered Email"
            placeholder="youremail@mail.com"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
            radius="md"
            ref={emailRef}
          />
          <Button onClick={sendOTP} type="submit" mt={10} radius="md">
            Send OTP
          </Button>
          <TextInput
            mt={20}
            required
            label="Enter OTP"
            placeholder="XXXXXX"
            leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
            radius="md"
            ref={otpRef}
          />
          <Button onClick={verifyOTP} type="submit" mt={10} mb={30} radius="md">
            Verify OTP
          </Button>

          {
            showForm && (

              <form onSubmit={resetForm.onSubmit(updatePassword)}>
                <Title order={3} mb={20} style={{ textAlign: 'center' }}>
                  Enter New Password
                </Title>
                <PasswordInput mb="xl" withAsterisk label="Password" placeholder="Your password" size="md" {...resetForm.getInputProps('password')} />
                <PasswordInput mb="xl" withAsterisk label="Confirm Password" placeholder="Confirm password" size="md" {...resetForm.getInputProps('confirmPassword')} />
                <Button fullWidth mt="xl" size="md" type='submit'>
                  Reset Password
                </Button>
              </form>
            )
          }

        </Container>
      </Paper>

    </>
  )
}

export default ResetPassword;