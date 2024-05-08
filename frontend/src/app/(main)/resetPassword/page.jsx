'use client'
import React, { useRef, useState } from 'react';
import classes from './resetpassword.module.css';
import { Button, Container, Image, Paper, PasswordInput, TextInput, Title, rem } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Rammetto_One } from 'next/font/google';
import clsx from 'clsx';


const font = Rammetto_One({ subsets: ['latin'], weight: ['400'] });


const ResetPassword = () => {

  const emailRef = useRef(null);
  const otpRef = useRef(null);
  const [verifiedUser, setVerifiedUser] = useState(null);

  const [showForm, setShowForm] = useState(false);

  // const navigate = useNavigate();
  const router = useRouter();

  const checkMailExists = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getbyemail/${emailRef.current.value}`);
    // console.log(res.status);
    const data = await res.json();
    // console.log(data);
    setVerifiedUser(data);
    return res.status === 200;
  }

  const sendOTP = async () => {
    if (!await checkMailExists()) {
      toast.error('Email not registered', { variant: 'error' });
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/sendotp`, {
      method: 'POST',
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    if (res.status === 201) {
      toast.success('OTP sent successfully', { variant: 'success' });
    } else {
      toast.error('Something went wrong', { variant: 'error' });
    }
  }

  const verifyOTP = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
    // console.log(res.status);
    if (res.status === 200) {
      setShowForm(true);
    } else {
      toast.error('Invalid OTP', { variant: 'error' });
    }
  }

  const updatePassword = async (values) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${verifiedUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log(res.status);
    if (res.status === 200) {
      toast.success('Password updated successfully', { variant: 'success' });
      router.push('/login');
    } else {
      toast.error('Something went wrong', { variant: 'error' });
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

          <Title order={1} mb={30} style={{ textAlign: 'center' }} className={clsx(classes.title, font.className)}>
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
          <Button onClick={sendOTP} className={classes.Button} type="submit" mt={10} radius="md">
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
          <Button onClick={verifyOTP} className={classes.Button} type="submit" mt={10} mb={30} radius="md">
            Verify OTP
          </Button>

          {
            showForm && (

              <form onSubmit={resetForm.onSubmit(updatePassword)}>
                <Title order={3} mb={20} mt={20} style={{ textAlign: 'center' }} className={clsx(classes.title, font.className)}>
                  Enter New Password
                </Title>
                <PasswordInput mb="xl" withAsterisk label="Password" placeholder="Your password" size="md" {...resetForm.getInputProps('password')} />
                <PasswordInput mb="xl" withAsterisk label="Confirm Password" placeholder="Confirm password" size="md" {...resetForm.getInputProps('confirmPassword')} />
                <Button fullWidth mt="xl" size="md" type='submit' variant="filled"
                    color='white'
                   className={classes.controlfirst} >
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